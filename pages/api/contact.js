// only executes on server and not on client
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { email, name, message } = req.body;

  if (
    !email ||
    !name ||
    !message ||
    !email.includes("@") ||
    name.trim === "" ||
    message.trim("") === ""
  ) {
    res
      .status(422)
      .json({ message: "Invalid input, as input validation has failed" });
    return;
  }

  //   check passed, store it in db

  const newMessage = {
    email,
    name,
    message,
  };
  let client;
  try {
    client = await MongoClient.connect(
      "mongodb+srv://esurender14:mongo123@cluster0.hwsx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (e) {
    res.status(500).json({ message: "Could not connect to db" });
  }
  const db = client.db();
  try {
    const result = await db.collection("messages").insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (e) {
    client.close();
    res.status(500).json({ message: "Storing new message failed" });
    return;
  }
  client.close();
  res.status(201).json({
    message: "Successfully stored the message!",
    message: newMessage,
  });
}
