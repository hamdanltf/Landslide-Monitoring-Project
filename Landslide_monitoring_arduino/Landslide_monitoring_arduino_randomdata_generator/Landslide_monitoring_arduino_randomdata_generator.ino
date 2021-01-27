//long x1;
//long y1;
////float z1;
////int output_tanah ;
////String output_getar;
////int counter;
//
//void setup() {
//  // put your setup code here, to run once:
//  Serial.begin(9600);
//
//}
//
//void loop() {
//  x1 = random(-180, 180);
//  y1 = random(-180, 180);
//  output_tanah = random(0, 100);
//  output_getar = "terdeteksi";
//  counter = random(0, 20);
//  // put your main code here, to run repeatedly:
//    Serial.println(x1 + String(" ") + y1 + String(" ") + output_tanah + String(" ") + output_getar + String(" ") + counter + String(" ") +  String("Node-01"));
//    delay(5000);
//}

long randNumber;
long randNumber2;

void setup() {
  Serial.begin(9600);

  // if analog input pin 0 is unconnected, random analog
  // noise will cause the call to randomSeed() to generate
  // different seed numbers each time the sketch runs.
  // randomSeed() will then shuffle the random function.
  randomSeed(analogRead(0));
}

void loop() {
  // print a random number from 0 to 299
  randNumber = random(0, 100);
  //  Serial.println(randNumber);

  // print a random number from 10 to 19
  randNumber2 = random(-180, 180);
  //  Serial.println(randNumber);
  Serial.println(randNumber2 + String(" ") + randNumber2 + String(" ") + randNumber + String(" ") + String("terdeteksi!") + String(" ") + randNumber + String(" ") +  String("Node-01"));
  delay(1000);
  Serial.println(randNumber2 + String(" ") + randNumber2 + String(" ") + randNumber + String(" ") + String("aman") + String(" ") + randNumber + String(" ") +  String("Node-02"));
  delay(1000);
  Serial.println(randNumber2 + String(" ") + randNumber2 + String(" ") + randNumber + String(" ") + String("aman") + String(" ") + randNumber + String(" ") +  String("Node-03"));
  delay(1000);
  Serial.println(randNumber2 + String(" ") + randNumber2 + String(" ") + randNumber + String(" ") + String("terdeteksi!") + String(" ") + randNumber + String(" ") +  String("Node-04"));
  delay(1000);
}
