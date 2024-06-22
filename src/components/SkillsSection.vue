<template>
    <section class="row" id="skills">
        <div class="skill-1">
            <div class="smoove smoove-z">
                <p>
                    <span style="color: black;">
                        # React
                        # HTML
                        # SaaS
                        # Javascript
                        # SQL
                        # PHP
                        # Bootstrap
                        # jQuery
                        # Git
                        # RWD
                        # UIUX
                        # Figma
                    </span>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="smoove smoove-b" data-move-x="-200px" data-move-y="200px">
                <h2>前端語言</h2>
                <p>融合 React 和 JavaScript 的動態設計、HTML 標籤的運用、以及 CSS 和 SCSS 屬性的優化，我能夠打造出最棒的網頁體驗。 同時，我熟悉 RWD
                    的原理與佈局配置，確保網站在各種設備上都呈現最佳效果。我熟練使用 Bootstrap 和 jQuery，能提升開發效率並保持結構清晰，確保網站具有現代感和優雅外觀。
                </p>
            </div>
            <div class="smoove  smoove-b" data-move-x="-100px" data-move-y="100px">
                <h2>前端框架</h2>
                <p>透過 React
                    框架進行開發，我專注於組件（component）的功能規劃，以建立可重用且模組化的元素，實現更加靈活和可擴展的應用程序架構。通過組件化的開發方式，我能夠提高代碼的重用性、可維護性和可擴展性，同時保持應用程序的整體結構清晰明了。使用
                    jQuery 進一步提高前端開發效率和互動性。
                </p>
            </div>
            <div class="smoove  smoove-b" data-move-x="100px" data-move-y="100px">
                <h2>版本控制</h2>
                <p>Git 是開發過程中不可或缺的工具，我非常重視並深刻理解它的重要性。使用版本控制蹤代碼的每一次修改、變更和歷史記錄，這對於個人和團隊的開發工作都至關重要。除了前端技術，我也熟悉後端開發，尤其是使用
                    PHP 和 SQL 來構建和管理數據庫，確保前後端協同工作，提供完整的網站和應用程序解決方案。
                </p>
            </div>
            <div class="smoove  smoove-b" data-move-x="200px" data-move-y="200px">
                <h2>UIUX</h2>
                <p>我能夠將設計和前端技術結合起來，提高使用者體驗。不僅能夠設計出具有吸引力和易用性的界面，還能夠利用前端技術實現這些設計，確保在各種設備上都能夠呈現出最佳效果。我能夠促進團隊間的有效溝通和協作，與設計師、產品經理和其他開發人員合作，確保設計理念有效實現，並在開發過程中保持協調。
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'SkillsSection',
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
