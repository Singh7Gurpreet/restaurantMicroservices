const rabbitMQ = require('amqplib');

class RabbitMessageQueue {
  constructor() {
    this.connection = null;
    this.channel = null;
    this.connect();
  }

  connect() {
    try {
      this.getConnection();
      this.getChannel();
      console.log('Connected to message queue successfully');
    } catch (Error) {
      console.log(Error.message);
    }
  }

  async getConnection() {
    if (!this.connection) {
      // should use PROCESS_ENV_QUEUEURI
      this.connection = await rabbitMQ.connect('amqp://rabbitmq-srv');
    }
    return this.connection;
  }

  async getChannel() {
    if (!this.channel) {
      const connection = await this.getConnection();
      this.channel = await connection.createChannel();
    }
    return this.channel;
  }

  async sendPayload(channelName, payload) {
    payload = JSON.stringify(payload);

    const channel = await this.getChannel();

    channel.assertQueue(channelName, {
      durable: true,
    });

    channel.sendToQueue(channelName, Buffer.from(payload), {
      persistent: true,
    });
  }
}

module.exports = new RabbitMessageQueue();
