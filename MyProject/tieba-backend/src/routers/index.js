const router = require('koa-router')();
const user_controller=require('../controller/user')
const post_controller=require('../controller/post')
const comment_controller=require('../controller/comment')
const reply_controller=require('../controller/reply')
const tags_controller=require('../controller/tags')
// 登录
router.post('/login', user_controller.login)
// 拿到前端给我的用户名和密码，去数据库查找是否存在
router.post('/getAllTags', tags_controller.getAllTags)
router.post('/addTags', tags_controller.addTags)
// 注册
router.post('/register', user_controller.register)
router.post('/getAllUser', user_controller.getAll)
router.post('/getPostByCollect', user_controller.getPostByCollect)
router.post('/collectPost', user_controller.collectPost)
router.post('/likePost', user_controller.likePost)
router.post('/getPostByLike', user_controller.getPostByLike)
router.post('/unLikePost', user_controller.unLikePost)
router.post('/unCollectPost', user_controller.unCollectPost)

router.post('/addComment', comment_controller.addComment)
router.post('/getCommentByPost', comment_controller.getCommentByPost)

router.post('/addReply', reply_controller.addReply)

router.post('/addPost', post_controller.addPost)
router.post('/getPostByUser', post_controller.getPostByUser)
router.post('/getPostByTags', post_controller.getPostByTags)
router.post('/getAllPost', post_controller.getAll)
router.post('/deletePost', post_controller.deletePost)
module.exports = router
