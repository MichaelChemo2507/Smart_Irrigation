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
      status = obj["state"].as<int>();
      currentTime = obj["time"].as<String>();
    } else {
      status = -1;
      Serial.println("no response!");
    }
  }
  switch (status) {
    case SHABBAT_MODE:
      {
        int ShabatIrrigationCnt = 0;
        String json = get_data_mode("shabbatMod");
        deserializeJson(obj, json);
        int Duration = obj["duration"].as<int>();
        String FirtIrrigation = obj["firtIrrigation"].as<String>();
        String SecondIrrigation = obj["secondIrrigation"].as<String>();
        if (currentTime >= FirtIrrigation && currentTime <= FirtIrrigation + 10)
          ShabatIrrigationCnt += irrigation(Duration);
        else if (currentTime >= SecondIrrigation && currentTime <= SecondIrrigation + 10)
          ShabatIrrigationCnt += irrigation(Duration);
        break;
      }
    case TEMP_MODE:
      {
        float currentTemp = read_temp();
        String json = get_data_mode("tempMode");
        deserializeJson(obj, json);
        int PreferTemp = obj["preferTemp"].as<int>();
        int MinTime = obj["minTime"].as<int>();
        int MaxTime = obj["maxTime"].as<int>();

        int currentLight = getLight();
        if (irrigationCnt < 2) {
          if (currentTemp > PreferTemp) {
            if (currentTime > "17:00" || currentTime < "06:00") {
              irrigationCnt += irrigation(MaxTime);
            } else if (currentLight < 40) {
              irrigationCnt += irrigation(MaxTime);
            }
          } else {
            if (currentTime > "17:00" || currentTime < "06:00") {
              irrigationCnt += irrigation(MinTime);
            } else if (currentLight < 40) {
              irrigationCnt += irrigation(MinTime);
            }
          }
        }
        break;
      }

    case MOISTURE_MODE:
      {
        int currentMoist = handleMoisture();
        String json = get_data_mode("moistureMode");
        deserializeJson(obj, json);
        float PreferMoisture = obj["moisture"].as<float>();
        if (currentMoist > PreferMoisture * 1.1)
          pumpOff();
        else if (currentMoist < PreferMoisture * 0.9)
          pumpOn();
        break;
      }
    case MENUAL_MODE:
      {
        String json = get_data_mode("manualMode");
        deserializeJson(obj, json);
        String ManualCommand = obj["command"];
        if (ManualCommand == "ON")
          pumpOn();
        else if (ManualCommand == "OFF")
          pumpOff();
        break;
      }
  }
}
