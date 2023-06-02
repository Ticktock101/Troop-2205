$('.carousel').carousel({
    interval: 2000
})

// var collapseElementList = document.querySelectorAll('.collapse');
// var collapseList = bootstrap.Collapse.getInstance(collapseElementList);

// collapseList.forEach(function(collapse) {
//     collapse.hide();
// });

// document.querySelector('.expand-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('.content').classList.toggle('expand');
// });

// var collapseElement = document.querySelector('.content');
//     var collapse = new bootstrap.Collapse(collapseElement, {
//         toggle: false // Add this line to prevent automatic toggling
//     });

//     document.querySelector('.expand-link').addEventListener('click', function (event) {
//         event.preventDefault();
//         collapse.toggle(); // Toggle the collapse manually
//     });

// var content = document.querySelector('.content');
//         var expandLink = document.querySelector('.expand-link');
//         var isExpanded = true;

//         content.classList.remove('expand');

//         expandLink.addEventListener('click', function (event) {
//             event.preventDefault();
//             if (isExpanded) {
//                 content.classList.remove('expand');
//                 isExpanded = false;
//             } else {
//                 content.classList.add('expand');
//                 isExpanded = true;
//             }
//         });

// var content = document.querySelector('.content');
// var expandLink = document.querySelector('.expand-link');
// var isExpanded = true;

// // content.classList.add('collapse');

// expandLink.addEventListener('click', function (event) {
//   event.preventDefault();
//   if (isExpanded) {
//     content.classList.add('collapse');
//     isExpanded = false;
//   } else {
//     content.classList.remove('collapse');
//     isExpanded = true;
//   }
// });
