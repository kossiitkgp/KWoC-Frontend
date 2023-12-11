document.addEventListener("DOMContentLoaded", function () {
    const container = document.body;
    const snowflakeSVGs = [
        './src/assets/snowflake1.svg',
        './src/assets/snowflake2.svg',
        './src/assets/snowflake3.svg'
    ];

    let lastTimestamp = 0;
    const throttleTime = 65; // Set the throttle time in milliseconds

    function createSnowflake(event) {
        const now = Date.now();
        if (now - lastTimestamp < throttleTime) {
            return; // Throttle the creation of snowflakes
        }
        lastTimestamp = now;

        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        const randomSnowflakeIndex = Math.floor(Math.random() * snowflakeSVGs.length);
        const randomSize = Math.floor(Math.random() * 20) + 10; // Random size between 10 and 30
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        const offsetX = event.clientX;
        const offsetY = event.clientY;

        snowflake.style.width = `${randomSize}px`;
        snowflake.style.height = `${randomSize}px`;
        snowflake.style.color = randomColor;

        const img = new Image();
        img.src = snowflakeSVGs[randomSnowflakeIndex];
        img.width = randomSize;
        img.height = randomSize;

        img.onload = function () {
            snowflake.appendChild(img);

            snowflake.style.position = "fixed";
            snowflake.style.left = `${offsetX - randomSize / 2}px`; // Center the snowflake around the cursor
            snowflake.style.top = `${offsetY - randomSize / 2}px`;  // Center the snowflake around the cursor

            container.appendChild(snowflake);

            // Animate the snowflake falling down
            const animation = snowflake.animate(
                [
                    { transform: `translate(0, 0)` }, // Initial position centered around the cursor
                    { transform: `translate(0, ${window.innerHeight + randomSize}px)` }
                ],
                {
                    duration: Math.floor(Math.random() * 3000) + 1000, // Shorter duration, random between 1000 and 4000 milliseconds
                    easing: "linear"
                }
            );

            animation.onfinish = () => {
                snowflake.remove();
            };
        };
    }

    document.addEventListener("mousemove", function (event) {
        createSnowflake(event);
    });

    // Adjust snowflake positions when scrolling
    document.addEventListener("scroll", function () {
        const snowflakes = document.querySelectorAll(".snowflake");
        snowflakes.forEach(snowflake => {
            const offsetY = parseFloat(snowflake.style.top.replace("px", ""));
            snowflake.style.top = `${offsetY + window.scrollY}px`;
        });
    });
});
