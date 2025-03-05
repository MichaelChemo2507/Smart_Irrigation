//-----------------------------------
void WaterPumpSetup(){
  pinMode(LEFT, OUTPUT);
  pinMode(RIGHT, OUTPUT);
}
//-----------------------------------
void HandleWaterPump(int value)
{
  switch (value)
  {

  case OFF:
    digitalWrite(OFF, LOW);
    break;

  case LEFT:
    digitalWrite(LEFT, HIGH);
    break;

  case RIGHT:
    digitalWrite(RIGHT, HIGH);
    break;
  }
}
//-----------------------------------