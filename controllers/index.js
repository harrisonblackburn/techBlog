const router = require('express').Router();

const postRouter = require('./api/postRoutes');

const homeRouter = require('./homeRoutes');

const userRouter = require('./api/userRoutes');

router.use('/api/user', userRouter)
// router.use('/api/post', postRouter)
router.use('/', homeRouter)