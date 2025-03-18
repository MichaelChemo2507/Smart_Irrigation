//-----------------------------------
#include <WiFi.h>
#include <WiFiClient.h>
#include <HTTPClient.h>

//-----------------------------------
const char *ssid = "Michael_WIFI";
const char *password = "87654321";
const char *ipAddrass = "192.168.1.83";
const char *port = "3214";
//-----------------------------------
WiFiClient client;
//-----------------------------------
void WiFi_SETUP() {
  WiFi.begin(ssid);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Wifi conected");
}
String get_state() {
  String ret = "-1";
  HTTPClient http;
  http.begin(client, "http://" + String(ipAddrass) + ":" + String(port) + "/stateFile/state");
  int httpCode = http.GET();
  Serial.println(httpCode);
  if (httpCode == HTTP_CODE_OK) {
    Serial.print("HTTP response code ");
    Serial.println(httpCode);
    String Res = http.getString();
    Serial.println(Res);
    ret = Res;
  }
  http.end();
  return ret;
}
String get_data_mode(String state) {
  String json = "";
  HTTPClient http;
  http.begin(client,  "http://" + String(ipAddrass) + ":" + String(port) + "/stateFile/dataMode?state=" + String(state));
  int httpCode = http.GET();
  Serial.println(httpCode);
  if (httpCode == HTTP_CODE_OK) {
    Serial.print("HTTP response code ");
    Serial.println(httpCode);
    json = http.getString();
  }
  http.end();
  return json;
}
