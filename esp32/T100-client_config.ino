//-----------------------------------
#include <WiFi.h>
#include <WiFiClient.h>
#include <HTTPClient.h>
//-----------------------------------
const char *ssid = "Michael_WIFI";
const char *password = "87654321";
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
