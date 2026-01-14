/** Header Change Effect **/
/* 5 */
const header = document.querySelector('#header');

/* 1 */
const stickyHeader = () => {
    /* 3 */
    const scry = window.scrollY;
    /* 4 */
    if (scry > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

/* 2 */
window.addEventListener('scroll', stickyHeader); /* 마우스 스크롤 하게 되면 const stickyHeader의 함수가 실행된다 */


/** Scroll Reveal Effect **/
/* 6 */
const sr = ScrollReveal({
    reset: false, // 스크롤 시 한 번만 실행
});

/* 7 */
sr.reveal('.landing-text-box', {
    duration: 1000,
    origin: "right", // 방향
    distance: "80px", // 얼마나
});