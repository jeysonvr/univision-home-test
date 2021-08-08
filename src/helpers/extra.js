
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

export const imgRequired = () => {
    const maxDivScroll = document.querySelector('.gridItem__card-grid').scrollWidth - document.querySelector('.gridItem__card-grid').clientWidth;
    const actualDivScroll = maxDivScroll - document.querySelector('.gridItem__card-grid').scrollLeft;
    
    if( actualDivScroll <= 0 ){
        return true;
    }

    return false;
}