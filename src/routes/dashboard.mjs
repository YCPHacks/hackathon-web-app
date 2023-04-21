import express from 'express';

const dashboard = express.Router();

dashboard.route('/')
    .get((req, res) => {
        res.status(200).render('dashboard');
    });

dashboard.route('/apply')
    .get((req, res) => {
        res.status(200).render('apply');
    });

dashboard.route('/event_applications')
    .get((req, res) => {
        res.status(200).render('event_applications', {
            event_applications: [
                {
                    user_id: '1000',
                    created_at: '2023-04-12',
                    updated_at: '2023-04-13',
                    status: 'accepted',
                    age: 21,
                    country: 'USA',
                    school: 'York College of Pennsylvania',
                    major: 'Computer Science'
                },
                {
                    user_id: '1010',
                    created_at: '2023-04-14',
                    updated_at: '2023-04-16',
                    status: 'flagged',
                    age: 62,
                    country: 'USA',
                    school: 'York College of Pennsylvania',
                    major: 'Computer Science'
                },
                {
                    user_id: '1100',
                    created_at: '2023-04-09',
                    updated_at: '2023-04-13',
                    status: 'pending',
                    age: 21,
                    country: 'USA',
                    school: 'York College of Pennsylvania',
                    major: 'Computer Science'
                }
            ]
        });
    })
    .post((req, res) => {
        res.redirect(303, '/event_applications');

    });

dashboard.route('/event_applications/event_applicationID')
    .get((req, res) => {
        res.status(200).render('event_application', {
            event_applicationID:
                {
                    user_id: '1000',
                    name: 'Test User',
                    created_at: '2023-04-12',
                    updated_at: '2023-04-13',
                    status: 'accepted',
                    age: 21,
                    country: 'USA',
                    school: 'York College of Pennsylvania',
                    major: 'Computer Science'
                }
        });
    })


dashboard.route('/summary')
    .get((req, res) => {
        res.status(200).render('event_applications_summary');
    });

dashboard.route('/hardware_items')
    .get((req, res) => {
        res.status(200).render('hardware_items');
    });

dashboard.route('/hardware_items/available')
    .get((req, res) => {
        res.status(200).render('hardware_items_available');
    });

export {dashboard};
