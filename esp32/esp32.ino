#include <ArduinoJson.h>

#define TEMP_MODE 80
#define MOISTURE_MODE 82
#define SHABBAT_MODE 84
#define MENUAL_MODE 86

JsonDocument doc;
long chackServer;
unsigned long lastTimeChackedServer;
int status;
String currentDate;

void setup() {
  millisToChackServer = 1000 * 60 * 10;
  lastTimeChackedServer = millis();
  status = -1;

  Serial.begin(115200);
  temp_setup();
  waterPumpSetup();
  WiFi_SETUP();
}

void loop() {

  if (millis() - lastTimeChackedServer > millisToChackServer) {
    lastTimeChackedServer = millis();
    String json = GetState();
    if (json != "-1") {
      deserializeJson(doc, json);
      status = doc["state"];
      currentDate = doc["date"];
    } else {
      state = -1;
      Serial.println("no response!");
    }
  }
  switch(state){
    case SHABBAT_MODE:
    break;

    case TEMP_MODE:
    break;

    case: MOISTURE_MODE:
    break;

    case MENUAL_MODE:
    break;

    default:
     
  }
}
