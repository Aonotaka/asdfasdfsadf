(function(){
  const yes = document.getElementById('yesBtn');
  const overlay = document.getElementById('overlay');
  const thankText = document.getElementById('thankText');
  const check = document.querySelector('.check');

  const to = 'aonotaka96@gmail.com'; 
  const subject = encodeURIComponent("バレンタインご招待の件");
  // compose the email body as multiple lines, join with CRLF for best compatibility
  const rawBody = [
    "타타님 平素より大変お世話になっております。",
    "この度は、バレンタインデーご招待につきまして、誠にご連絡いただきありがとうございます。",
    "",
    "いただいたご提案につきましてぜひ前向きにお受けさせていただきたく存じます。",
    "今後とも何卒よろしくお願い申し上げます。",
    "",
    "敬具",
    "すーちゃんより"
  ].join("\r\n");
  const body = encodeURIComponent(rawBody);

  function openMailClient() {
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  yes.addEventListener('click', function(){
    overlay.classList.add('show');
    thankText.textContent = "Correct Answer";
    yes.disabled = true;
    yes.style.opacity = 0.9;
    try { openMailClient(); } catch(e) { /* ignore */ }
  });

  // 'No' handler: fix incorrect variable name and make the button show angry text briefly
  const noBtn = document.getElementById('No');
  if (noBtn) {
    const originalText = noBtn.textContent;
    noBtn.addEventListener('click', function(e){
      e.preventDefault();
      // show angry emoji and Korean text on the No button
      noBtn.textContent = '😡  뭐? 말도 안 되는 대답이야';
      // restore original label after a short delay
      setTimeout(() => { noBtn.textContent = originalText; }, 1800);
    });
  }

})();
