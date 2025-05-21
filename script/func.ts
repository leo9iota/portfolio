const showClassBetween = (now: number, from: number, to: number, className: String): String => {
    if (now > from && now < to) {
        console.log('rerenderClass->true', className, now, from, to)
        return className;
    }
    console.log('rerenderClass->false', className, now, from, to)
    return '';
}
const hideClassBetween = (now: number, from: number, to: number, className: String): String => {
    console.log('rerender', now, from, to)
    if (now > from && now < to) {
        console.log('rerenderClass->false', className, now, from, to)
        return '';
    }
    console.log('rerenderClass->true', className, now, from, to)
    return className;
}

const percentageSteps = (now: number, from: number, to: number, step: number, frac: number = 1): number => {
    return Math.ceil(100 / (to - from) * (now - from) / (100 / Math.ceil((to - from) / step))) * (100 / Math.ceil((to - from) / step)) / frac
}

const percentageTranslateFocus = (now: number, from: number, to: number, step: number, frac: number = 1, correction = 15): number => {
    const percentageStep = percentageSteps(now, from, to, step, frac);
    return -(percentageStep - 50 - correction) 
}

export { showClassBetween, hideClassBetween, percentageSteps, percentageTranslateFocus }