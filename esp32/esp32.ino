//--Library--------------------------
#include <DHT.h>
#define DHTTYPE DHT11 
//--WaterPump------------------------
#define OFF 0 
#define LEFT 16
#define RIGHT 17
//--SensorPin------------------------
#define LIGHT 36
#define TEMP 16
#define MOISTURE 36
//--StateModes-----------------------
#define LIGHT_MODE 60
#define TEMP_MODE 61
#define MOISTURE_MODE 62
#define SHABAT_MODE 63
#define MANUAL_MODE 64
//--Config---------------------------
#define ADMIN "http://10.9.2.107"
#define PORT 3214 
//--Variables------------------------
DHT dht(TEMP,DHTTYPE); 
int pumpState = OFF;
int state = MANUAL_MODE;
unsigned long prevStateCheckTimeStamp;
int stateDelayMinutes = 1000 * 60 * 10;
//-----------------------------------
void setup()
{
  Serial.begin(115200);
  WiFi_SETUP();
  WaterPumpSetup();
  TempSetup();
  StateSetup();
}
//-----------------------------------
void loop()
{
  // SEND_DATA( HandleTemp(), HandleLight(), HandleMoisture() );
  // HandleWaterPump(pumpState);

  if (millis() - prevStateCheckTimeStamp >= ){
    prevStateCheckTimeStamp = millis();
    state = GET_STATE();
  }
  HandleState(state);
  delay(1000);
}
//-----------------------------------



