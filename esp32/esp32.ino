#include <ArduinoJson.h>

JsonDocument doc;
long chackServer;
unsigned long lastTimeChackedServer;
int status;

void setup() {
  millisToChackServer = 1000 * 60 * 10;
  lastTimeChackedServer = millis();
  status = -1;

  Serial.begin(115200);
  TempSetup();
  WiFi_SETUP();
}

void loop() {

  if (millis() - lastTimeChackedServer > millisToChackServer) {
    lastTimeChackedServer = millis();
    String json = GetState();
    if (json != "-1") {
      deserializeJson(doc, json);
      status = doc["state"];
    } else {
      state = -1;
      Serial.println("no response!");
    }
  }
  switch(state){

  }
}
