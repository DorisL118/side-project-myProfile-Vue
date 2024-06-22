<template>
    <section id="me">
        <div class="me-photo">
            <div class="me-photo-1">
                <img src="@/assets/img/me-1.jpg" alt="形象照" />
                <img src="@/assets/img/me-2.jpg" alt="形象照" />
                <img src="@/assets/img/me-3.jpg" alt="形象照" />
            </div>
        </div>
        <iframe class="timeline" id="autoHeightIframe" src="../assets/swiper-marquee-test/dist/index.html"
            frameborder="0" width="100%" height="500px"></iframe>
        <div class="me-content smoove">
            <br />
            <p>
                <span style="color: black; font-weight: 600;">我是劉馨璘 Doris Liu，一位擁有不同角色技能的前端工程師。</span>
                <br />
                從行銷公關的角色開始，我為完成當時負責的企業官網，逐步理解 UIUX 設計，並深入探討使用者體驗。通過不斷的學習與進修，我最終帶著滿滿的熱忱，決心踏入前端設計領域。
                <br />
                在這段過程中，我接觸了多個不同領域，這些經歷成為我成長的寶貴養分。不論是以行銷的角度策劃 SEO 優化策略，或是使用 Google Analytics
                進行流量追蹤與分析；以公關的角度強化品牌亮點曝光；還是以設計的角度思考每個介面的使用體驗，如何讓功能互動順暢簡單且具美感，這些都豐富了我的視野和能力。在前端設計開發中，我致力於將團隊的設計完美呈現給使用者。擁有不同的職位經驗，使我在多方溝通時能更好地理解不同團隊的需求，提升溝通效率，加速前端開發進程。
                <br />
                這些多元的經歷，讓我在專案中能夠兼顧各個層面的需求，創造出更具價值和吸引力的作品。未來，我將持續學習，保持對前端設計的熱情，不斷推出更多優秀的作品，與團隊共同實現創新和卓越。
            </p>
            <hr />
        </div>
        <iframe class="timeline" id="autoHeightIframe" src="../assets/swipertimeline-progressbar/dist/index.html"
            frameborder="0" width="100%" height="500px"></iframe>
    </section>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'MeSection',
    mounted() {
        $(() => {
            $(".smoove").smoove({
                offset: "40%",
            });

            $(".smoove-z").smoove({
                rotateX: "90deg",
                moveZ: "-500px",
                moveY: "100px",
            });
        });
    }
}
</script>