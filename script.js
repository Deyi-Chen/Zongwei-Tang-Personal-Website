// 页面加载完成后隐藏加载动画
window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    setTimeout(function() {
        loader.classList.add('loaded');
    }, 500); // 延迟500毫秒，确保动画平滑
});

// 其他现有JavaScript代码...
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // 点击菜单项后关闭菜单（在移动设备上）
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });
    
    // 在窗口调整大小时处理菜单显示
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA按钮动画效果和点击事件
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        
        ctaButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
        
        ctaButton.addEventListener('click', function() {
            document.querySelector('#about').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // 表单提交处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 在实际项目中，这里会发送数据到服务器
            // 这里只做简单的验证和反馈
            if (name && email && message) {
                alert('谢谢您的留言，' + name + '！我们会尽快回复您。');
                contactForm.reset();
            } else {
                alert('请填写所有必填字段。');
            }
        });
    }
});