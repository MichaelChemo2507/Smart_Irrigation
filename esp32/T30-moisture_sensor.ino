#define MOISTURE_SENSOR 39
float handleMoisture() {
  return map(analogRead(MOISTURE_SENSOR), 0, 4095, 0, 100);
}
