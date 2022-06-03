void setup() {
    Serial.begin(9600);
    pinMode(2, OUTPUT);
    Serial.print("Program started!");
    //delay like sleep but in milliseconds
    delay(100);
    Serial.print("Program by: Aghastmuffin ~ Kingve");
    delay(100);
    Serial.print("Code edited from: https://www.tutorialspoint.com/arduino/arduino_dc_motor.htm?adlt=strict&toWww=1&redig=7B54C99B4AC749DAB71DF48279AF3966");
    delay(100);
    Serial.print("https://www.tutorialspoint.com/print-plain-text-in-arduino?adlt=strict&toWww=1&redig=E51D50CF4AE54F768FB7C2CCDB449A1F");
    delay(100);
    Serial.print("And: https://www.tutorialspoint.com/arduino/arduino_blinking_led.htm?adlt=strict&toWww=1&redig=1403C1D4412444F194156EDFD078AB94");
    delay(100);
    Serial.print("Remember to put motor in the LED spots if it doesnt work follow motor instructions, but no breadboard (NOTE NO POWER CONTORL)");
    delay(100);
}
void loop() {
    digitalWrite(3, HIGH)
    delay(1000);
    digitalWrite(3, LOW)
    delay(1000);
}
