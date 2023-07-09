import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(cors());
zomato.use(helmet());


zomato.get('/', (req, res) => 
res.json({ message: 'Setup Success Yay!!' })
);

zomato.listen(3000, () => {
    console.log('Listening on port 3000');
})