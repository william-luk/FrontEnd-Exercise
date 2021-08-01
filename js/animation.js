window.onload = setTimeout(function () {
    var teamButton = document.getElementById('teams');
    var dropdown = document.getElementById('dropdown');

    //toggle dropdown
    teamButton.addEventListener('focus', function () {
        dropdown.style.display = 'flex';
        console.log(dropdown.style.display);
    })

    //hide dropdown on outside click
    teamButton.addEventListener('blur', function () {
        dropdown.style.display = 'none';
        console.log(dropdown.style.display);
    })

    //https://stackoverflow.com/questions/14188654/detect-click-outside-element-vanilla-javascript
    //https://css-tricks.com/working-with-javascript-media-queries/
    //https://stackoverflow.com/questions/4402287/javascript-remove-event-listener
    //https://www.codegrepper.com/code-examples/javascript/js+check+if+dom+element+exists
    //show-hide nav bar

    var linkElements = document.getElementById('links');
    var searchElements = document.getElementById('search');
    var navBar = document.getElementById('navbar');
    var showNav = document.getElementById('showNav');
    var wrapper = document.getElementById('wrapper');
    var teams = document.getElementById('teams');

    const mobileQuery = window.matchMedia('(max-width: 480px)');

    function mobileChange(e) {
        if (e.matches) {

            //val-character-reveal tablet
            //val-c4
            anime({
                targets: '#val-header',
                opacity: [0, 1]
            })
            anime({
                targets: '#val-c4',
                //        filter: ['grayscale(1)', 'grayscale(0)'],
                opacity: [0, 1],
                translateY: ['1em', 0],
                translateX: '-50%',
                left: '50%',
                easing: 'easeOutExpo',
                duration: 800,
                delay: 1200
            })
            //val-c1
            anime({
                targets: '#val-c1',
                opacity: [0, 1],
                translateX: [0, '-0%'],
                left: '0%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2000
            })
            //val-c6
            anime({
                targets: '#val-c6',
                opacity: [0, 1],
                translateX: [0, '-100%'],
                left: '100%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2000,
                complete: function () {
                    anime({
                        targets: '#val-team-header',
                        opacity: [0, 1],
                        duration: 2000
                    })
                    var get = document.getElementById('val-c6');
                    if (get.style.transform == 'translateX(-100%)') {
                        var rellax = new Rellax('.rellax', {
                            speed: -1,
                            center: false
                        })
                        var rellax3 = new Rellax('.rellax1', {
                            speed: 0,
                            center: false
                        });
                        var rellax1 = new Rellax('.rellax3', {
                            speed: 1,
                            center: false
                        });
                        var rellax4 = new Rellax('.rellax4', {
                            speed: 1,
                            center: false
                        });
                    };
                }
            })

            //https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
            var scrollToTop = document.getElementById('back-to-top');
            var bodyContent = document.documentElement

            function scrollCheck() {
                var scrollTotal = bodyContent.scrollHeight - bodyContent.clientHeight;
                var scrollCalc = bodyContent.scrollTop / scrollTotal;
                console.log(scrollCalc);
                if (scrollCalc > 0.400) {
                    scrollToTop.style.display = 'block';
                } else {
                    scrollToTop.style.display = 'none';
                }
            }

            document.addEventListener('scroll', scrollCheck);

            //mobile sizing nav and functionality
            console.log('mobile size')
            linkElements.style.display = 'none';
            searchElements.style.display = 'none';
            wrapper.addEventListener('click', mobileNavClick)

            function mobileNavClick(event) {
                console.log('display change click')
                var checkClickInside = navBar.contains(event.target);
                if (checkClickInside) {
                    anime({
                        targets: '#navbar',
                        height: '20rem',
                        easing: 'easeInOutExpo',
                        duration: 500,
                        complete: function () {
                            linkElements.style.display = 'block';
                            searchElements.style.display = 'block';
                        }
                    })
                } else {
                    //                    this.removeEventListener('click', mobileNavClick);
                    anime({
                        targets: '#navbar',
                        height: '5rem',
                        easing: 'easeInOutQuad',
                        duration: 500,
                        begin: function () {
                            linkElements.style.display = 'none';
                            searchElements.style.display = 'none';
                        }
                    })
                }
            }
        } else {
            if (typeof (showNav) != 'undefined' && showNav != null) {
                this.removeEventListener('resize', mobileNavClick);
            }
            linkElements.style.display = 'flex';
            searchElements.style.display = 'flex';
            this.removeEventListener('resize', mobileNavClick);
        }

    }

    const tabletQuery = window.matchMedia('(min-width: 760px)');

    function tabletChange(e) {
        if (e.matches && !fullsizeQuery.matches) {

            console.log('tablet size')
            //val-character-reveal tablet
            //val-c4
            anime({
                targets: '#val-header',
                opacity: [0, 1]
            })
            anime({
                targets: '#val-c4',
                //        filter: ['grayscale(1)', 'grayscale(0)'],
                opacity: [0, 1],
                translateY: ['1em', 0],
                translateX: '-50%',
                left: '50%',
                easing: 'easeOutExpo',
                duration: 800,
                delay: 1200,
            })
            anime({
                targets: '#val-c2',
                opacity: [0, 1],
                translateX: [0, '-18%'],
                left: '18%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2000,
            })
            //val-c6
            anime({
                targets: '#val-c6',
                opacity: [0, 1],
                translateX: [0, '-70%'],
                left: '70%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2000,
            })
            //val-c1
            anime({
                targets: '#val-c1',
                opacity: [0, 1],
                translateX: [0, '0%'],
                left: '0',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2300,
            })
            //val-c7
            anime({
                targets: '#val-c7',
                opacity: [0, 1],
                translateX: [0, '-100%'],
                left: '100%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2300,
                complete: function () {
                    anime({
                        targets: '#val-team-header',
                        opacity: [0, 1],
                        duration: 2000
                    })
                    var get = document.getElementById('val-c7');
                    if (get.style.transform == 'translateX(-100%)') {
                        var rellax = new Rellax('.rellax', {
                            speed: -1,
                            center: false
                        })
                        var rellax1 = new Rellax('.rellax1', {
                            speed: 1,
                            center: false
                        });
                        var rellax3 = new Rellax('.rellax3', {
                            speed: 3,
                            center: false
                        });
                        var rellax1 = new Rellax('.rellax4', {
                            speed: 4,
                            center: false
                        })
                    };
                }
            })
        }

    }

    const fullsizeQuery = window.matchMedia('(min-width: 1100px)');

    function fullsizeChange(e) {
        if (e.matches) {
            console.log('fullscreen size')
            anime({
                targets: '#val-header',
                opacity: [0, 1]
            })
            var valTitle1 = anime.timeline({});
            valTitle1
                .add({
                    targets: '#val-title-1',
                    translateY: '0.5em',
                    translateX: '-0.5em',
                    easing: 'easeOutExpo',
                    duration: 100,
                    delay: 200,
                })
                .add({
                    targets: '#val-title-1',
                    opacity: [0, 1],
                    keyframes: [
                        {
                            translateY: 0
                    },
                        {
                            translateX: 0
                    }
                ],
                    easing: 'easeOutExpo',
                    duration: 1000,
                })
            //valTitle2
            anime({
                targets: '#val-title-2',
                opacity: [0, 1],
                translateY: ['-5em', 0],
                easing: 'easeOutExpo',
                duration: 500,
                delay: 900
            })
            var valTitle3 = anime.timeline({});
            valTitle3
                .add({
                    targets: '#val-title-3',
                    translateY: '-1em',
                    translateX: '1em',
                    easing: 'easeOutExpo',
                    duration: 100,
                    delay: 500
                })
                .add({
                    targets: '#val-title-3',
                    opacity: [0, 1],
                    keyframes: [
                        {
                            translateY: 0
                    },
                        {
                            translateX: 0
                    }
                ],
                    easing: 'easeOutExpo',
                    duration: 1000,
                })

            //val-character-reveal
            //val-c4
            anime({
                targets: '#val-c4',
                //        filter: ['grayscale(1)', 'grayscale(0)'],
                opacity: [0, 1],
                translateY: ['1em', 0],
                translateX: '-50%',
                left: '50%',
                easing: 'easeOutExpo',
                duration: 800,
                delay: 1200,
            })
            //val-c3
            anime({
                targets: '#val-c3',
                opacity: [0, 1],
                translateX: [0, '-32%'],
                left: '32%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 800,
                delay: 1700,
            })
            //val-c5
            anime({
                targets: '#val-c5',
                opacity: [0, 1],
                translateX: [0, '-68%'],
                left: '68%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 800,
                delay: 1700,
            })
            //val-c2
            anime({
                targets: '#val-c2',
                opacity: [0, 1],
                translateX: [0, '-12%'],
                left: '12%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2000,
            })
            //val-c6
            anime({
                targets: '#val-c6',
                opacity: [0, 1],
                translateX: [0, '-77%'],
                left: '77%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 2000,
            })
            //val-c1
            anime({
                targets: '#val-c1',
                opacity: [0, 1],
                translateX: [0, '-2%'],
                left: '2%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1400,
                delay: 2300,
            })
            //val-c7
            anime({
                targets: '#val-c7',
                opacity: [0, 1],
                translateX: [0, '-96%'],
                left: '96%',
                autoplay: true,
                easing: 'easeOutExpo',
                duration: 1400,
                delay: 2300,
                complete: function () {
                    anime({
                        targets: '#val-team-header',
                        opacity: [0, 1],
                        duration: 2000
                    })
                    var get = document.getElementById('val-c7');
                    if (get.style.transform == 'translateX(-96%)') {
                        var rellax = new Rellax('.rellax', {
                            speed: -7,
                            center: false,
                        })
                        var rellax1 = new Rellax('.rellax1', {
                            speed: 2,
                            center: false
                        });
                        var rellax2 = new Rellax('.rellax2', {
                            speed: 4,
                            center: false
                        });
                        var rellax3 = new Rellax('.rellax3', {
                            speed: 4,
                            center: false
                        });
                        var rellax1 = new Rellax('.rellax4', {
                            speed: 8,
                            center: false
                        })
                    };
                }
            })
        }

    }

    mobileQuery.addEventListener('change', mobileChange);
    mobileChange(mobileQuery);
    tabletQuery.addEventListener('change', tabletChange);
    tabletChange(tabletQuery);
    fullsizeQuery.addEventListener('change', fullsizeChange);
    fullsizeChange(fullsizeQuery);


}, 500);
