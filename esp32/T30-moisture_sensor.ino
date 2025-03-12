#define MOISTURE_SENSOR 39
int handleMoisture() {
  return analogRead(MOISTURE);
}
