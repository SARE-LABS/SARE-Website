String readString;
void setup()
{
    // put your setup code here,  to run once:
    Serial.begin(9600);
    pinMode(13, OUTPUT);
}

void loop()
{
    // put your main code here, to run repeatedly:
    while (Serial.available())
    {
        delay(3);
        char c = Serial.read();
        readString += c;
    }

    if (readString.length() > 0)
    {
        Serial.println(readString);
        if (readString == "11")
        {
            digitalWrite(13, HIGH);
        }
        else if (readString == "12")
        {
            digitalWrite(13, LOW);
        }
        else if (readString == "21")
        {
            digitalWrite(12, HIGH);
        }
        else if (readString == "22")
        {
            digitalWrite(12, LOW);
        }
        readString = "";
    }
}