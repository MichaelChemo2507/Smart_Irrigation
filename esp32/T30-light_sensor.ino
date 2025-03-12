#define LIGHT_PIN 36
int handleLight() {
  return map(analogRead(LIGHT), 0, 4095, 0, 100);
}