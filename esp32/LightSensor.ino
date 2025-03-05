//-----------------------------------
int HandleLight(){
  int LightSensor = analogRead(LIGHT);
  Serial.print("Light Sensor: ");
  Serial.println(LightSensor);
  return LightSensor;
}
//-----------------------------------
