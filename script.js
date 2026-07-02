body{
    margin:0;
    background:linear-gradient(135deg,#ff4d6d,#ff8fab);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Arial,sans-serif;
    overflow:hidden;
}

.container{
    text-align:center;
    color:white;
}

h1{
    font-size:32px;
    margin-bottom:30px;
}

.gift-box{
    font-size:120px;
    cursor:pointer;
    animation:shake 1s infinite;
}

#message{
    margin-top:20px;
    font-size:22px;
}

@keyframes shake{
    0%{transform:rotate(0deg);}
    25%{transform:rotate(-10deg);}
    50%{transform:rotate(10deg);}
    75%{transform:rotate(-10deg);}
    100%{transform:rotate(0deg);}
}

.opened{
    animation:none;
    transform:scale(1.3);
}
