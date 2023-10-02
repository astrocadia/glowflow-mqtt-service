const mqtt = require('mqtt');

const options = {
  host: 'localhost',
  port: 1883, // Use 8883 for MQTT over SSL
  username: 'beezer',
  password: 'password'
};

const client = mqtt.connect(options);

client.on('connect', () => {
  console.log('Connected to MQTT Broker');

  // Subscribe to a topic
  client.subscribe('your/topic', (err) => {
    if (err) throw err;
  });
});

// Listening for messages on the subscribed topic
client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});
