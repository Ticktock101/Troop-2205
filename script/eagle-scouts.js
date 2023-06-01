function resizeIframe() {
    var iframe = document.getElementById('eagle');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}