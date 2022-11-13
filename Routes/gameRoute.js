const router = require("express").Router();

let Player = require("../Models/playerModel");

//delete a player
router.route("/:id").delete((req, res) => {
  Player.findByIdAndDelete({ _id: req.params.id })
    .then(res.json("Player deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get all players
router.route("/").get((req, res) => {
  Player.find()
    .then((Player) => res.json(Player))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get a player by id
router.route("/playerstats/:id").get((req, res) => {
  Player.findById({ _id: req.params.id })
    .then((Player) => res.json(Player))
    .catch((err) => res.status(400).json("Error: " + err));
});

//See if player exists
router.route("/players/userlogin/:email").get((req, res) => {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log(
    "Checking if an player already exists with an email of " + req.params.email
  );
  Player.findOne({ email: req.params.email })
    .then((Player) => {
      if (Player === null) {
        console.log("User not found. Please complete user registration now.");
        res.json(null);
      } else {
        console.log("User found! Logging in now.");
        res.json(Player);
      }
    })
    .catch((err) =>
      res.status(400).json("Error when trying to sign in: " + err)
    );
});

//Create new player entity
router.route("/players/createplayer").post((req, res) => {
  const email = req.body.email;
  const fullname = req.body.fullname;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const image = req.body.image;
  const playername = req.body.playername;
  const joinDateString = req.body.joinDateString;
  const gameInProgress = false;
  const newPlayer = new Player({
    email,
    fullname,
    firstname,
    lastname,
    image,
    joinDateString,
    playername,
    gameInProgress,
    // role,
    // birthday,
    // online,
    // color,
    // picture,
  });
  newPlayer
    .save() //save player to db
    .then((Player) => res.json(Player))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a player
router.route("/create").post((req, res) => {
  let fullrequester = req.body.requester;
  const requester =
    fullrequester.charAt(0).toUpperCase() + fullrequester.slice(1);
  let fullitem = req.body.item;
  const item = fullitem.charAt(0).toUpperCase() + fullitem.slice(1);
  const quantity = req.body.quantity;
  const pocode = req.body.pocode;
  const link = req.body.link;
  let fullvendor = req.body.vendor;
  const vendor = fullvendor.charAt(0).toUpperCase() + fullvendor.slice(1);
  const location = req.body.location;
  const notes = req.body.notes;
  const price = req.body.price;

  //make the date ordered today's date
  const current = new Date();
  const dateOrdered = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  const tax = 0.0;
  const shipping = 0.0;
  const status = "Requested";
  const approvedBy = "Not Approved Yet";
  const purchasedBy = "Not Purchased Yet";
  const invoice = "No Invoice Yet";
  const receivedBy = "Not Received Yet";
  const deliveredBy = "Not Delivered To Requester Yet";
  const deniedBy = "Not Denied";
  const partOfBulkPurchase = false;

  const newPlayer = new Player({
    requester,
    item,
    quantity,
    pocode,
    link,
    vendor,
    location,
    price,
    tax,
    shipping,
    notes,
    dateOrdered,
    status,
    approvedBy,
    purchasedBy,
    invoice,
    receivedBy,
    deliveredBy,
    deniedBy,
    partOfBulkPurchase,
  });
  newPlayer
    .save() //save a player to db
    .then(() => res.json("Order added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// //create new bulk order invoice
// router.route("/bulkreceipt").post((req, res) => {
//   const orders = req.body.orders
//   const items = req.body.items
//   const pocodes = req.body.pocodes
//   const vendors = req.body.vendors
//   const tax = req.body.tax
//   const shipping = req.body.shipping
//   const purchasedBy = req.body.purchasedBy
//   const notes =
//     "This is the tax cost and shipping cost for all orders that were included in this bulk order."

//   //make the date ordered today's date
//   const current = new Date()
//   const dateBulkOrdered = `${
//     current.getMonth() + 1
//   }/${current.getDate()}/${current.getFullYear()}`

//   const newBulkOrderInvoice = new BulkOrderInvoice({
//     orders,
//     items,
//     pocodes,
//     vendors,
//     tax,
//     shipping,
//     notes,
//     dateBulkOrdered,
//     purchasedBy,
//   })
//   newBulkOrderInvoice
//     .save() //save to db
//     .then(() => res.json("Bulk order shipping and tax costs saved!"))
//     .catch((err) => res.status(400).json("Error: " + err))
// })

// //bulk approve
// router.route("/bulkupdate").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.orders + ", " + req.body.approvedBy
//   )
//   Order.updateMany(
//     { _id: { $in: req.body.orders } },
//     { $set: { status: "Approved", approvedBy: req.body.approvedBy } }
//   )
//     .then(() => res.json("Orders updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })

// //update pocode
// router.route("/updatepocode/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.pocode + ", " + req.params.id
//   )
//   Order.updateOne({ _id: req.params.id }, { $set: { pocode: req.body.pocode } })
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })
// //update price
// router.route("/updateprice/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.price + ", " + req.params.id
//   )
//   Order.updateOne({ _id: req.params.id }, { $set: { price: req.body.price } })
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })

//update player name
router.route("/updatename/:id").put((req, res) => {
  console.log(
    "Data sent to the backend: " + req.body.name + ", " + req.params.id
  );
  Player.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } })
    .then(() => res.json("Player updated."))
    .catch((err) =>
      res.status(400).json("Error when saving updates to database: " + err)
    );
});

// //update vendor
// router.route("/updatevendor/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.vendor + ", " + req.params.id
//   )
//   Order.updateOne({ _id: req.params.id }, { $set: { vendor: req.body.vendor } })
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })
// //update quantity
// router.route("/updatequantity/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.quantity + ", " + req.params.id
//   )
//   Order.updateOne(
//     { _id: req.params.id },
//     { $set: { quantity: req.body.quantity } }
//   )
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })
// //update link
// router.route("/updatelink/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.link + ", " + req.params.id
//   )
//   Order.updateOne({ _id: req.params.id }, { $set: { link: req.body.link } })
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })
// //update notes
// router.route("/updatenotes/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.notes + ", " + req.params.id
//   )
//   Order.updateOne({ _id: req.params.id }, { $set: { notes: req.body.notes } })
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })
// //update item
// router.route("/updateitem/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.item + ", " + req.params.id
//   )
//   Order.updateOne({ _id: req.params.id }, { $set: { item: req.body.item } })
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })
// //update importance
// router.route("/markAsImportant/:id").put((req, res) => {
//   console.log(
//     "Data sent to the backend: " + req.body.isImportant + ", " + req.params.id
//   )
//   Order.updateOne(
//     { _id: req.params.id },
//     { $set: { isImportant: req.body.isImportant } }
//   )
//     .then(() => res.json("Order updated."))
//     .catch((err) =>
//       res.status(400).json("Error when saving updates to database: " + err)
//     )
// })

// //bulk purchase
// router.route("/bulkpurchase").put((req, res) => {
//   console.log("")
//   console.log("Data sent to the backend:")
//   console.log("Orders' Id's: " + req.body.orders)
//   console.log("Orders' Prices: " + req.body.prices)
//   console.log("Orders' Total Cost: " + req.body.totalPrice)
//   console.log("Bulk Order Tax Total: " + req.body.tax)
//   console.log("Bulk Order Shipping Total: " + req.body.shipping)
//   console.log("Purchaser: " + req.body.purchasedBy)
//   console.log("")

//   const orderIds = req.body.orders
//   orderIds.forEach((orderId) => {
//     Order.findById(orderId)
//       .then((Order) => {
//         console.log("Order being updated: " + orderId)
//         console.log("BEFORE:")
//         console.log("Status: " + Order.status)
//         console.log("Tax: " + Order.tax)
//         console.log("Shipping: " + Order.shipping)
//         console.log("Purchased By: " + Order.purchasedBy)
//         console.log("")

//         Order.status = "Purchased"
//         Order.tax = (
//           (Order.price / req.body.totalPrice) *
//           req.body.tax
//         ).toFixed(2) //itemTax = ((itemCost/bulkCost)*bulkTax)
//         Order.shipping = (
//           (Order.price / req.body.totalPrice) *
//           req.body.shipping
//         ).toFixed(2) //itemShipping = ((itemCost/bulkCost)*bulkShipping)
//         Order.purchasedBy = req.body.purchasedBy
//         Order.partOfBulkPurchase = true
//         Order.purchaseDate = new Date()
//         //make the date ordered today's date
//         const current = new Date()
//         Order.purchaseDateString = `${
//           current.getMonth() + 1
//         }/${current.getDate()}/${current.getFullYear()}`

//         Order.purchaseNumber = req.body.num
//         Order.paymentMethod = req.body.method

//         console.log("")
//         console.log("AFTER:")
//         console.log("Status: " + Order.status)
//         console.log("Tax: " + Order.tax)
//         console.log("Shipping: " + Order.shipping)
//         console.log("Purchased By: " + Order.purchasedBy)

//         Order.save()
//           .then(() => console.log("Order updated."))
//           .catch((err) =>
//             res.status(400)("Error when saving update to database: " + err)
//           )
//       })
//       .catch((err) =>
//         res.status(400)("Error when saving updates to database: " + err)
//       )
//   })
// })

//update an order
router.route("/:id").put((req, res) => {
  Player.findById(req.params.id)
    .then((Player) => {
      console.log("The new status sent to the backend: " + req.body.status);
      console.log("The order's status before being updated: " + Player.status);
      //update status
      if (req.body.statusChange === "delivering") {
        Player.deliveredBy = req.body.deliveredBy;
      }
      if (req.body.statusChange === "receiving") {
        Player.receivedBy = req.body.receivedBy;
      }
      if (req.body.statusChange === "approving") {
        Player.approvedBy = req.body.approvedBy;
      }
      if (req.body.statusChange === "purchasing") {
        Player.approvedBy = req.body.approvedBy;
        Player.purchasedBy = req.body.purchasedBy;
        Player.tax = req.body.tax;
        Player.shipping = req.body.shipping;
        Player.purchaseDate = new Date();
        //make the date purchased today's date
        const current = new Date();
        Player.purchaseDateString = `${
          current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`;

        const min = Math.ceil(1);
        const max = Math.floor(999999999);
        const num = Math.floor(Math.random() * (max - min));
        Player.purchaseNumber = num;
        Player.paymentMethod = req.body.method;
        // Player.invoice = req.body.invoice
        //Player.invoice = req.file.originalname
      }
      if (req.body.statusChange === "denying") {
        Player.approvedBy = req.body.deniedBy;
      }
      Player.status = req.body.status;

      // console.log("The player's status after being updated: " + Player.status)
      // console.log("Approved by: " + Player.approvedBy)
      // console.log("Purchased by: " + Player.purchasedBy)
      // console.log("Received by: " + Player.receivedBy)
      // console.log("Delivered by: " + Player.deliveredBy)

      Player.save()
        .then(() => res.json("Player updated."))
        .catch((err) =>
          res.status(400).json("Error when saving update to database: " + err)
        );
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// //add an order to the archive
// router.route("/").post((req, res) => {
//   const originalId = req.body.id
//   const requester = req.body.requester
//   const item = req.body.item
//   const quantity = req.body.quantity
//   const pocode = req.body.pocode
//   const link = req.body.link
//   const vendor = req.body.vendor
//   const location = req.body.location
//   const price = req.body.price
//   const tax = req.body.tax
//   const shipping = req.body.shipping
//   const notes = req.body.notes
//   const dateOrdered = req.body.dateOrdered
//   const status = req.body.status
//   const invoice = req.body.invoice
//   const approvedBy = req.body.approvedBy
//   const purchasedBy = req.body.purchasedBy
//   const purchaseDate = req.body.purchaseDate
//   const purchaseDateString = req.body.purchaseDateString
//   const partOfBulkPurchase = req.body.partOfBulkPurchase
//   const purchaseNumber = req.body.purchaseNumber
//   const receivedBy = req.body.receivedBy
//   const deliveredBy = req.body.deliveredBy
//   const deniedBy = req.body.deniedBy
//   const paymentMethod = req.body.paymentMethod
//   //make the date added to the archive today's date
//   const current = new Date()
//   const dateArchived = `${
//     current.getMonth() + 1
//   }/${current.getDate()}/${current.getFullYear()}`

//   const newOrderArchive = new OrderArchive({
//     originalId,
//     requester,
//     item,
//     quantity,
//     pocode,
//     link,
//     vendor,
//     location,
//     price,
//     tax,
//     shipping,
//     notes,
//     dateOrdered,
//     status,
//     invoice,
//     approvedBy,
//     purchasedBy,
//     purchaseDate,
//     purchaseDateString,
//     partOfBulkPurchase,
//     purchaseNumber,
//     receivedBy,
//     deliveredBy,
//     deniedBy,
//     dateArchived,
//     paymentMethod,
//   })
//   newOrderArchive
//     .save() //save an order to db
//     .then(() => res.json("Order added to archives!"))
//     .catch((err) => res.status(400).json("Error: " + err))
// })

module.exports = router;
