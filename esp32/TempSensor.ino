//-----------------------------------
void TempSetup(){
  	dht.begin(); 
}
float HandleTemp(){
  float Humidity = dht.readHumidity();
  float Temp = dht.readTemperature(); 
  Serial.print("Temp: ");
  Serial.println(Temp);

  return Temp;
}
//-----------------------------------
