#include <DHT.h>

#define DHR_PIN 16
#define DHT_TYPE DHT22

DHT dht(DHR_PIN, DHT_TYPE);

void temp_setup() {
  dht.begin();
}

float read_temp() {
  return dht.readTemperature();
}