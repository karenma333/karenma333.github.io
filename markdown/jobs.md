<!doctype html>
<html lang="en">
<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-102079523-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-102079523-1');
	</script>
	<title>Karen Ma - Portfolio</title>	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="./public/css/portfolio.css" rel="stylesheet">
	<link href="./output.css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
       
</head>

<body>
	<div class="navbar">
		<h1>Karen Ma</h1>							
	</div>
	<main class="writeup">
<div>
	<a href="./index.html">Back</a>
</div>

<div class="pageTitle">

## Automated Jobs Builder

</div>

<div class="splash">

![Image of jobs overview](./public/images/splashJobs.png)

</div>
<div class = "text">

### Summary
Automations were a popular customer feature that allowed users to simplify their workflow using automated jobs. However, the complexity of the feature meant that our support staff spent many hours working to create new automations and diagnose errors in customer-created jobs. A lack of visibility into how jobs worked caused distrust and hesitancy to adopt further jobs-related features.  

After interviewing our power users, analyzing our job usage data on the front and back end, and conducting an ethnographic study on our customer support team, I was able to identify a list of pain points. From there, I led a series of workshops with the product and engineering team to set a future product vision to aim for as well as clear initial steps for improvement. 


### Key Insights
* **Creating jobs is not a linear process**
	* When observing our users, I noticed that often times they had multiple tabs open to make one job. They needed to reference different parts of a job, especially when making complex jobs with multiple paths. Then, they wanted to be able to test a job and verify that everything was as intended
	* I introduced the concept of a job overview diagram that could be used in multiple different places in the application. Users could scan the job at a glance to check the whole job at once. Additionally, I introduced preview capabilities to check upcoming jobs
* **Not everyone is a developer**
	* Language used for jobs was directly mapped from back-end statuses and led to confusion when developer mental models did not match our users' understanding. For example, our developers considered a job that did not result in an action to be failed, causing a short spurt of panic from our users as they saw a series of jobs failing
	* I tested different language, especially for job status and job scheduling to align with our customers' expectations
* **Automation requires good audit**
	* One of the themes from our research was that some customers would take hours to manually verify that all the automation was working correctly. With such a laborious process, they were also hesitant to further automate their workflow because the verification would be such a hassle
	* I added a history of jobs fired, with customer alerts for failed jobs so they could reduce their verification process to focus on investigating any unexpected failures. 

</div>

![Image of retirement advice onboarding](./public/images/JobTrigger.png)
![Image of retirement advice dashboard](./public/images/JobOperation.png)
![Image of retirement advice dashboard](./public/images/JobPreview.png)
![Image of retirement advice dashboard](./public/images/JobHistory.png)
![Image of retirement advice dashboard](./public/images/JobHistoryDetails.png)
![Image of retirement advice dashboard](./public/images/JobSchedule.png)


<html>
	</main>
</body>

</html>
