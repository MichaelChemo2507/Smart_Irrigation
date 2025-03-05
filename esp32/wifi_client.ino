//-----------------------------------
#include <WiFi.h>
#include <WiFiClient.h>
#include <HTTPClient.h>
//-----------------------------------
const char *ssid = "Kinneret College";
const char *password = "";
//-----------------------------------
WiFiClient client;
//-----------------------------------
void WiFi_SETUP()
{
    WiFi.begin(ssid);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.println("Wifi conected");
}

void SEND_DATA(float temp, int light, int moisture)
{
    HTTPClient http;
    String dataURL = "temp=" + String(temp);
    dataURL += "&light=" + String(light);
    dataURL += "&moisture=" + String(moisture);
    http.begin(client, String(ADMIN) + ":" + String(PORT) + "/esp?" + dataURL);
    http.end();
}
int GET_STATE(){
    HTTPClient http;
    int ret = -1;
    http.begin(client, String(ADMIN) + ":" + String(PORT) + "/esp/state");
    int httpCode = http.GET();
    if (httpCode == HTTP_CODE_OK)
    {
        Serial.print("HTTP respond: ");
        String res = http.getString();
        ret = res.toInt();
    }
    http.end();
    return ret;
}