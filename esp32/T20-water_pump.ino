#define WATER_PUMP_PIN 15
bool isStart;
unsigned long irrigationTimeStart;
void waterPumpSetup() {
  isStart = false;
  irrigationTimeStart = millis();
  pinMode(WATER_PUMP_PIN, OUTPUT);
}
int irrigation(int duration) {
  int res = 0;
  if (!isStart) {
    isStart = true;
    irrigationTimeStart = millis();
  }
  if (millis() - irrigationTimeStart < (duration * 60 * 1000))
    digitalWrite(WATER_PUMP_PIN, HIGH);
  else {
    digitalWrite(WATER_PUMP_PIN, LOW);
    isStart = false;
    res = 1;
    totalIrrigationTime += duration * 60 * 1000;
  }
  return res;
}

void pumpOn() {
  digitalWrite(WATER_PUMP_PIN, HIGH);
}
void pumpOff() {
  digitalWrite(WATER_PUMP_PIN, LOW);
}