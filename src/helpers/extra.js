
export const elementInViewport = (el, parentScrollPosition) => {
    if( el ) {
        var top = el.offsetTop;
        var left = el.offsetLeft - parentScrollPosition;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        
        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        
        return (
            top >= window.pageYOffset &&
            left >= (window.pageXOffset) &&
            (top + height) <= (window.pageYOffset + window.innerHeight) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }
};

export const imgRequired = (divRef) => {
    const maxDivScroll = divRef.scrollWidth - divRef.clientWidth;
    const actualDivScroll = maxDivScroll - divRef.scrollLeft;
    
    if( actualDivScroll <= 0 ){
        return true;
    }

    return false;
}