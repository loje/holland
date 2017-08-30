$(document).ready(function(){

	$("input[type=radio]").click(function(){
		(($("input[type=radio]:checked").parent()).parent()).attr("style","opacity: 0.2;");
	});

	$("#btnstart").click(function(){
		$("#personbox").attr("style","z-index:0;visibility: hidden;");
		$(".survey-wrap").removeClass("blur");

	})


	$("#btnSubmit").click(function(){
		if($("input[type=radio]:checked").length == 30){
			$(".survey-subject").attr("style","z-index: 0; display: none;");
			$(".survey-subject").addClass("blur");
			$(".inp").attr("style","z-index:1;visibility: visible;");

			var a1 = $("input[name='option1']:checked").val();

			var a2 = $("input[name='option2']:checked").val();
			var a3 = $("input[name='option3']:checked").val();
			var a4 = $("input[name='option4']:checked").val();
			var a5 = $("input[name='option5']:checked").val();
			var a6 = $("input[name='option6']:checked").val();
			var a7 = $("input[name='option7']:checked").val();
			var a8 = $("input[name='option8']:checked").val();
			var a9 = $("input[name='option9']:checked").val();
			var a10 = $("input[name='option10']:checked").val();

			var a11 = $("input[name='option11']:checked").val();
			var a12 = $("input[name='option12']:checked").val();
			var a13 = $("input[name='option13']:checked").val();
			var a14 = $("input[name='option14']:checked").val();
			var a15 = $("input[name='option15']:checked").val();
			var a16 = $("input[name='option16']:checked").val();
			var a17 = $("input[name='option17']:checked").val();
			var a18 = $("input[name='option18']:checked").val();
			var a19 = $("input[name='option19']:checked").val();
			var a20 = $("input[name='option20']:checked").val();

			var a21 = $("input[name='option21']:checked").val();
			var a22 = $("input[name='option22']:checked").val();
			var a23 = $("input[name='option23']:checked").val();
			var a24 = $("input[name='option24']:checked").val();
			var a25 = $("input[name='option25']:checked").val();
			var a26 = $("input[name='option26']:checked").val();
			var a27 = $("input[name='option27']:checked").val();
			var a28 = $("input[name='option28']:checked").val();
			var a29 = $("input[name='option29']:checked").val();
			var a30 = $("input[name='option30']:checked").val();


			var b1 = $("#hidden1").val(a1);
			var b2 = $("#hidden2").val(a2);
			var b3 = $("#hidden3").val(a3);
			var b4 = $("#hidden4").val(a4);
			var b5 = $("#hidden5").val(a5);
			var b6 = $("#hidden6").val(a6);
			var b7 = $("#hidden7").val(a7);
			var b8 = $("#hidden8").val(a8);
			var b9 = $("#hidden9").val(a9);
			var b10 = $("#hidden10").val(a10);

			var b11 = $("#hidden11").val(a11);
			var b12 = $("#hidden12").val(a12);
			var b13 = $("#hidden13").val(a13);
			var b14 = $("#hidden14").val(a14);
			var b15 = $("#hidden15").val(a15);
			var b16 = $("#hidden16").val(a16);
			var b17 = $("#hidden17").val(a17);
			var b18 = $("#hidden18").val(a18);
			var b19 = $("#hidden19").val(a19);
			var b20 = $("#hidden20").val(a20);

			var b21 = $("#hidden21").val(a21);
			var b22 = $("#hidden22").val(a22);
			var b23 = $("#hidden23").val(a23);
			var b24 = $("#hidden24").val(a24);
			var b25 = $("#hidden25").val(a25);
			var b26 = $("#hidden26").val(a26);
			var b27 = $("#hidden27").val(a27);
			var b28 = $("#hidden28").val(a28);
			var b29 = $("#hidden29").val(a29);
			var b30 = $("#hidden30").val(a30);


			var changgui = $("#changgui").val(parseFloat(b7.val()) + parseFloat(b8.val()) + parseFloat(b14.val()) + parseFloat(b21.val()) + parseFloat(b30.val()));

			var qiye = $("#qiye").val(parseFloat(b6.val()) + parseFloat(b12.val()) + parseFloat(b13.val()) + parseFloat(b20.val()) + parseFloat(b29.val()));

			var shehui = $("#shehui").val(parseFloat(b4.val()) + parseFloat(b5.val()) + parseFloat(b11.val()) + parseFloat(b19.val()) + parseFloat(b28.val()));

			var shiji = $("#shiji").val(parseFloat(b9.val()) + parseFloat(b15.val()) + parseFloat(b22.val()) + parseFloat(b23.val()) + parseFloat(b24.val()));

			var yanjiu = $("#yanjiu").val(parseFloat(b2.val()) + parseFloat(b3.val()) + parseFloat(b18.val()) + parseFloat(b26.val()) + parseFloat(b27.val()));

			var yishu = $("#yishu").val(parseFloat(b1.val()) + parseFloat(b10.val()) + parseFloat(b16.val()) + parseFloat(b17.val()) + parseFloat(b25.val()));



			//定义数组
			var cg = parseInt(changgui.val());
			var qy = parseInt(qiye.val());
			var sh = parseInt(shehui.val());
			var sj = parseInt(shiji.val());
			var yj = parseInt(yanjiu.val());
			var ys = parseInt(yishu.val());

			var max = Math.max(cg,qy,sh,sj,yj,ys);
			//alert("最大值 =" + max);
			

			if(cg == max){
				$("#feature").html("你个性较为耐心细致，处事计划性和条理性强；你平时给人的感觉是非常尊重权威和规章制度，且做事责任心和执行力非常强，但有时过于谨慎和保守，缺乏创造性。<br />相对而言，你更愿意从事按部就班的程序性或原则性强的工作。");
				$("#famous").html("罗宾森在工作过程中认真细致有耐心，处事踏实稳重，面对繁杂的任务时不骄不躁，且具有较高的职业操守。正因为如此这样，他一步步攀登职业的顶峰，成为世界著名的会计师。");
				$("#develop").html("从事有一定程序的，使用文字和数据资料设备协助实现组织目标的工作，如财务总监、 会计、 银行职员、 成本估算师、 税务专家、 审计师、 统计专家、 计算机操作员、 秘书等。");

				$("#result").text("我属于常规型人格！适合从事记账员、会计、银行出纳、法庭速记员、成本估算员、税务员、核算员、打字员、办公室职员、统计员、计算机操作员、秘书。");
				//alert("常规型 =" + cg);
			}else if(qy == max){
				$("#feature").html("你为人较为务实，且做事有较强的目的性，常爱追求权力，权威和物质财富，习惯以利益得失，权力地位和金钱等来衡量做事的价值，通常你的经理非常旺盛，且爱好竞争，敢冒风险，个性上你非常乐观和自信，为人处世过程中表现出较强的支配欲和决断力，具有领导潜质。<br />相对而言，你善于使用工具，更愿意从事操作性强的工作。");
				$("#famous").html("中国企业家马云勇于冒险，且说服能力极强，在创业最艰难的时期吸引了大量外部的优秀人才加入阿里巴巴，乐观自信但从不自负，且社交能力极强，他通过“朋友遍天下”促进事业的发展，最后成为一名优秀的企业家。");
				$("#develop").html("从事管理，领导和监督他人，以及劝服和影响他人等能够带来政治和竞技方面的成就的工作，如创业者，企业管理人员，管理培训生，市场策划与营销，律师，政治家，企业投资人等。");

				$("#result").text("我属于企业型人格！适合从事推销员、进货员、商品批发员、旅馆经理、饭店经理、广告宣传员、调度员、律师、政治家、零售商。");
				//alert("企业型 =" + qy);
			}else if(sh == max){
				$("#feature").html("你的特点是善于言谈，且为人友好热情，乐于助人，人际圈非常广泛，平时你较为关心社会问题，比较看重社会义务和道德，并具有强烈的社会责任感，总渴望发挥自己的社会作用。<br />相对而言，你更愿意从事与人打交道的工作。");
				$("#famous").html("敬爱的周恩来总理乐为人友好热情，平易近人，在交际中潇洒大方，机警风趣、灵活应变，且具有很强的国家荣誉感，他屡次对外交官和记者的刁难交谈处理的游刃有余，成为一名出色的外交官。");
				$("#develop").html("从事启迪、帮助、教育性质和提供信息性质的工作，如行政人员、公关、销售、社会学者、动物学者、导游、福利机构工作者、咨询人员、社会工作者、学校领导、社会科学教师，公共保健护士等。");

				$("#result").text("我属于社会型人格！适合从事社会学者、导游、福利机构工作者、咨询人员、社会工作者、社会科学教师、学校领导、精神病工作者、公共保健护士。");
				//alert("社会型 =" + sh);
			}else if(sj == max){
				$("#feature").html("你的动手能力强，做事手脚灵活，动作协调，你喜欢有规则的具体劳动和需要基本操作技能的工作，但你的社交能力有待加强。<br />相对而言，你善于使用工具，更愿意从事操作性强的工作。");
				$("#famous").html("著名飞行员麦克康奈正因为具备了敏捷的思维与手脚操纵技能，在驾驶战斗机过程中对飞机的方向、位置、速度等各项信息能够加以综合判断，并实施正确操纵与控制，才能战力战功，被评为“王牌飞行员”");
				$("#develop").html("从事高科技和手工艺技能方面的职业，如IT工程师，土木工程师，专业仪器操作室，飞机机械师，鱼类和野生动物专家，自动化专家，电器工程师，通讯工程师，机械制图师。");

				$("#result").text("我属于实际型人格！适合从事木匠、农民、操作X光的技师、工程师、飞机机械师、鱼类和野生动物专家、自动化技师、机械工(车工、钳工等)、电工、无线电报务员、火车司机、长途公共汽车司机、机械制图员、修理机器、电器师。");
				//alert("实际型 =" + sj);
			}else if(yj == max){
				$("#feature").html("你为人好奇，有较强的求知欲，且独立性强，平时爱好专研；<br />你的抽象思维能力较强，喜欢进行逻辑分析和推理，且通常你考虑问题较为理性，凡事欲求精准。<br />相对而言，你更喜欢较为独立的工作环境，且更愿意需要认真专研且富有一定创造性的工作。");
				$("#famous").html("著名科学家爱迪生正因为具备了相关领域中丰富的知识基础，抽象的逻辑思维以及坚持不懈的钻研精神，才有了电灯、电报等的发明，为人类事业做出了巨大的贡献，被誉为“世界发明大王”");
				$("#develop").html("从事科学研究性质以及具有科学研究价值的职业，如气象学家，生物学家，天文学家，药剂师，动物学者，化学家，科学报刊编辑，地质学者，职务学者，无力学者，数学家，实验员，科研人员，科技工作者。");

				$("#result").text("我属于研究型人格！适合从事气象学者、生物学者、天文学家、药剂师、动物学者、化学家、科学报刊编辑、地质学者、植物学者、物理学者、数学家、实验员、科研人员、科技作者。");
				//alert("研究型 =" + yj);
			}else if(ys == max){
				$("#feature").html("你的创新意识较强，具有一定的艺术潜能，平时生活中你可能乐于创造出新颖且与众不同的工作成果；你常渴望表现出自己的个性，较为关心自身价值的实现，但做事可能有些理想化，过于追求完美。<br />相对而言，你更愿意从事艺术色彩丰富的工作。");
				$("#famous").html("著名女歌唱家宋祖英具有精湛的演唱天赋和善于用歌声传达内心情感的艺术，再加上自身勇于在舞台表现自己的才能和个性，才让自己的美音名扬中外。");
				$("#develop").html("从事艺术方面和文学方面的工作，如创意总监、设计总监、室内装饰专家、主编、律师、摄影师、作家、演员、记者、作曲家、雕刻家、漫画家等。");

				$("#result").text("我属于艺术型人格！适合从事室内装饰专家、图书管理专家、摄影师、音乐教师、作家、演员、记者、诗人、作曲家、编剧、雕刻家、漫画家。");
				//alert("艺术型 =" + ys);
			}



			//创建雷达图

			if(cg <= 1){
				cg = 1;
			}else if(cg >= 10){
				cg = 10;
			};

			if(qy <= 1){
				qy = 1;
			}else if(qy >= 10){
				qy = 10;
			};

			if(sh <= 1){
				sh = 1;
			}else if(sh >= 10){
				sh = 10;
				
			};

			if(sj <= 1){
				sj = 1;
			}else if(sj >= 10){
				sj = 10;
			};

			if(yj <= 1){
				yj = 1;
			}else if(yj >= 10){
				yj = 10;
			};

			if(ys <= 1){
				ys = 1;
			}else if(ys >= 10){
				ys = 10;
			};


			//alert(cg);
			//创建图表

			var array = new Array(cg,qy,sh,sj,yj,ys);

			var ctx = document.getElementById("myChart").getContext("2d");
			var data = {
				labels : ["常规型","企业型","社会型","实际型","研究型","艺术型"],
				datasets : [
					{
						fillColor : "rgba(255,102,153,0.5)",
						strokeColor : "rgba(255,153,153,1)",
						pointColor : "rgba(255,102,102,1)",
						pointStrokeColor : "#fff",
						data : [array[0],array[1],array[2],array[3],array[4],array[5]]
					}
				]
			}
			/// 动画效果
			var options = {
						
				//布尔值 - If we show the scale above the chart data            
				scaleOverlay : false,
				
				//Boolean - If we want to override with a hard coded scale
				scaleOverride : false,
				
				//** Required if scaleOverride is true **
				//Number - The number of steps in a hard coded scale
				scaleSteps : null,
				//Number - The value jump in the hard coded scale
				scaleStepWidth : null,
				//Number - The centre starting value
				scaleStartValue : null,
				
				//Boolean - Whether to show lines for each scale point
				scaleShowLine : true,

				//String - Colour of the scale line    
				scaleLineColor : "rgba(0,0,0,.1)",
				
				//Number - Pixel width of the scale line    
				scaleLineWidth : 1,

				//Boolean - Whether to show labels on the scale    
				scaleShowLabels : false,
				
				//Interpolated JS string - can access value
				scaleLabel : "<%=value%>",
				
				//String - Scale label font declaration for the scale label
				scaleFontFamily : "'Arial'",
				
				//Number - Scale label font size in pixels    
				scaleFontSize : 12,
				
				//String - Scale label font weight style    
				scaleFontStyle : "normal",
				
				//String - Scale label font colour    
				scaleFontColor : "#666",
				
				//Boolean - Show a backdrop to the scale label
				scaleShowLabelBackdrop : true,
				
				//String - The colour of the label backdrop    
				scaleBackdropColor : "rgba(255,255,255,0.75)",
				
				//Number - The backdrop padding above & below the label in pixels
				scaleBackdropPaddingY : 2,
				
				//Number - The backdrop padding to the side of the label in pixels    
				scaleBackdropPaddingX : 2,
				
				//Boolean - Whether we show the angle lines out of the radar
				angleShowLineOut : true,
				
				//String - Colour of the angle line
				angleLineColor : "rgba(0,0,0,.1)",
				
				//Number - Pixel width of the angle line
				angleLineWidth : 1,            
				
				//String - Point label font declaration
				pointLabelFontFamily : "'Arial'",
				
				//String - Point label font weight
				pointLabelFontStyle : "normal",
				
				//Number - Point label font size in pixels    
				pointLabelFontSize : 12,
				
				//String - Point label font colour    
				pointLabelFontColor : "#666",
				
				//Boolean - Whether to show a dot for each point
				pointDot : true,
				
				//Number - Radius of each point dot in pixels
				pointDotRadius : 3,
				
				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,
				
				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,
				
				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,
				
				//Boolean - Whether to fill the dataset with a colour
				datasetFill : true,
				
				//Boolean - Whether to animate the chart
				animation : true,

				//Number - Number of animation steps
				animationSteps : 60,
				
				//String - Animation easing effect
				animationEasing : "easeOutQuart",

				//Function - Fires when the animation is complete
				onAnimationComplete : null
				
			}
			/// 创建对象，生成图表
			new Chart(ctx).Radar(data,options);

		}else{
			alert("还有题目没填！");
		}

	})

})