#include <ArduinoJson.h>

#define TEMP_MODE 80
#define MOISTURE_MODE 82
#define SHABBAT_MODE 84
#define MENUAL_MODE 86

JsonDocument obj;
long chackServer;
unsigned long lastTimeChackedServer;
int status;
int irrigationCnt;
String currentTime;
int millisToChackServer;


void setup() {
  millisToChackServer = 1000 * 60 * 10;
  lastTimeChackedServer = millis();
  status = -1;
  irrigationCnt = 0;

  Serial.begin(115200);
  temp_setup();
  waterPumpSetup();
  WiFi_SETUP();
}

void loop() {

  if (millis() - lastTimeChackedServer > millisToChackServer) {
    lastTimeChackedServer = millis();
    String json = get_state();
    if (json != "-1") {
      deserializeJson(obj, json);
      status = obj["state"];
      currentTime = obj["time"];
    } else {
      status = -1;
      Serial.println("no response!");
    }
  }
  switch (status) {
    case SHABBAT_MODE:
      break;

    case TEMP_MODE:
      float currentTemp = read_temp();
      String json = get_data_mode("tempMode");
      deserializeJson(obj, json);
      int preferTemp = obj["preferTemp"];
      int minTime = obj["minTime"];
      int maxTime = obj["maxTime"];

      int currentLight = getLight();
      if (irrigationCnt < 2) {
        if (currentTemp > preferTemp) {
          if (currentTime > "17:00" || currentTime < "06:00") {
            irrigation(maxTime);
            irrigationCnt++;
          } else if (currentLight < 40) {
            irrigation(maxTime);
            irrigationCnt++;
          }
        } else {
          if (currentTime > "17:00" || currentTime < "06:00") {
            irrigation(minTime);
            irrigationCnt++;
          } else if (currentLight < 40) {
            irrigation(minTime);
            irrigationCnt++;
          }
        }
      }
      break;

    case MOISTURE_MODE:
      break;

    case MENUAL_MODE:
      break;

    default:
  }
}
