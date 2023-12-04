/*import {Router} from 'express';
const router=Router();
import bodyParser from 'body-parser';
router.get('/',(req,res)=>{res.send('Hello world')})

const msg='Hai';
router.get('/message',async(req,res)=>{res.json(msg)})
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
let dataStore = [];
router.post('/data', (req, res) => {
   const newData = req.body;
   dataStore.push(newData);
   res.status(201).json({ message: 'Data stored successfully', data: newData });
});

router.get('/data', (req, res) => {
    res.json({ data: dataStore });
  });
    



export default router;
*/
import {Router} from "express";
const router = Router();
let info;
router.get('/',function(req,res){
    res.send("Hello World");
})
router.post('/receive',function(req,res){
    const data = req.body;
    info = data.inputMsg;
   // console.log(info);
    res.send(info);
})

router.get('/provide',(req,res)=>{
  console.log(info);
  res.json(info);
})

export default router;

