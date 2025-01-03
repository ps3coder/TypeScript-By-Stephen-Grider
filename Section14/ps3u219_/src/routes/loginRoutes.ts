import { Router, Request, Response, NextFunction } from "express";


interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.logggedIn) {
        next()
        return;
    }
    res.status(403);
    res.send('Not permitted')
}

const router = Router();



router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
        <div>
        <label>Email</label>
        <input name="email" />
        </div>
        <div>
        <label>Password</label>
        <input name="password" />
        </div>
        <button>Submit</button>
        </form>
        `);
});
router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'hi@history.com' && password === 'password') {
        // mark this person as login in 
        req.session = { loggedIn: true }
        res.redirect('/');
        // redirect them to the root route
    } else {
        res.send(`Invalid email and password`)
    }
})


router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(
            `
    <div>
    <div>
    You are logged in
    </div>
    <a href="/logout">Logout</a>
    </div>
            `
        )
    } else {
        `
    <div>
    <div>
    You are not logged in
    </div>
    <a href="/login">Login</a>
    </div>
            `
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route protected user')
})

export { router };