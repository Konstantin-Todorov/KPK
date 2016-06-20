function solve() {
    return function (selector) {
        var template =
        '<div class="event-calendar">'+
        '<h2 class="header">Appointments for <span class="month">{{this.month}}</span> <span class="year">{{this.year}}</span></h2>'+
        '{{#each days}}'+
        '<div class="col-date">'+
            '<div class="date">{{this.day}}</div>'+
            '<div class="events">'+
            '{{#each events}}'+
                '<div class="event {{this.importance}}" {{#if this.title}}title="duration: {{this.duration}}"{{/if}}>'+
                	'{{#if this.title}}'+ 
                    '<div class="title">{{this.title}}</div>'+
                    '{{else}}' + 
                    '<div class="title">Free slot</div>'+
                    '{{/if}}'+
                    '{{#if this.time}}'+
                   '<span class="time">at: {{this.time}}</span>'+
                   '{{/if}}'+
                '</div>'+
            '{{/each}}'+

            '</div>'+
       '</div>'+
       '{{/each}}';	
        document.getElementById(selector).innerHTML = template;
    };
}

module.exports = solve;