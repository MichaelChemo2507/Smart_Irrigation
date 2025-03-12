#define LIGHT_PIN 36
int getLight() {
  return map(analogRead(LIGHT), 0, 4095, 0, 100);
}