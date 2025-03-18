#define WATER_PUMP_PIN 15
bool isStart;
unsigned long irigationTimeStart;
void waterPumpSetup() {
  isStart = false;
  irigationTimeStart = millis();
  pinMode(WATER_PUMP_PIN, OUTPUT);
}
int irrigation(int duration) {
  int res = 0;
  if (!isStart) {
    isStart = true;
    irigationTimeStart = millis();
  }
  if (millis() - irigationTimeStart < (duration * 60 * 1000))
    digitalWrite(WATER_PUMP_PIN, HIGH);
  else {
    digitalWrite(WATER_PUMP_PIN, LOW);
    isStart = false;
    res = 1;
  }
  return res;
}