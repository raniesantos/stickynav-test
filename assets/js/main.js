dummy = [...Array(7)]

document.querySelector('main').innerHTML = dummy.map((k, i) => {
    return `
    <article class="markdown-body">
        <h1>heading 0${i + 1}</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat vero unde doloribus dignissimos doloremque quam impedit delectus corporis fugiat,
            temporibus nulla expedita repellendus beatae voluptatum minima maxime dolore vitae qui.
            Ex ut suscipit consequatur vero illo necessitatibus cumque repellendus esse est dolores enim dolor assumenda,
            praesentium placeat fugiat dolore aliquam quae voluptates nisi quod amet in at consequuntur aperiam numquam!
        </p>
    </article>
    `
}).join('')
