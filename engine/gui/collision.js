function rectCollidesRect(rectA, rectB) {
    return rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x && rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y;
}

function circleCollidesCircle(circleA, circleB) {
    const dx = circleB.x - circleA.x, dy = circleB.y - circleA.y;
    return (circleA.radius + circleB.radius) < Math.sqrt((dx * dx) + (dy * dy));
}
