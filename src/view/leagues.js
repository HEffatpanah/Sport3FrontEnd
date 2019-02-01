import React, {Component} from 'react';
import {Tab, Segment, Grid, Table, Loader, Menu, Dropdown} from 'semantic-ui-react'
import Template from '../components/template'
import Select from 'react-select';
import MatchesSummaryTable from "../components/matchSummary";
import Adv from "../components/advertisement";
import LeagueTable from '../components/league/leagueTable'
// import OldLeague from '../components/league/oldLeague'
import LeagueSeasons from '../components/league/leagueSeasons'
import axios from "axios";


const leagueData = [
    {
        leagueName: 'لیگ برتر(97-98)',
        tableName: 'لیگ برترایران',
        header: ['تیم', 'بازیها', 'برد', 'مساوی', 'باخت', 'گل زده', 'گل خورده', 'تفاضل گل', 'امتیاز'],
        tableData: [
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'تراکتور', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'استقلال', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },
            // {
            //     teamInfo:[
            //         {featureName:'teamName',featureValue:'سپاهان', featureLink:'https://www.google.com'},
            //         {featureName:'matches',featureValue:23, featureLink: null},
            //         {featureName:'win',featureValue:2, featureLink: null},
            //         {featureName:'draw',featureValue:3,featureLink: null},
            //         {featureName:'loose',featureValue:3, featureLink: null},
            //         {featureName:'goalZ',featureValue:3, featureLink: null},
            //         {featureName:'goalK',featureValue:3, featureLink: null},
            //         {featureName:'goalSub',featureValue:3, featureLink: null},
            //         {featureName:'score',featureValue:3, featureLink: null},
            //     ]
            // },

        ]
    },
    {
        leagueName: 'لیگ برتر(96-97)',
        tableName: 'لیگ برترایران',
        header: ['تیم', 'بازیها', 'برد', 'مساوی', 'باخت', 'گل زده', 'گل خورده', 'تفاضل گل', 'امتیاز'],
        tableData: [
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },
            {
                teamInfo: [
                    {featureName: 'teamName', featureValue: 'سپاهان', featureLink: 'https://www.google.com'},
                    {featureName: 'matches', featureValue: 23, featureLink: null},
                    {featureName: 'win', featureValue: 2, featureLink: null},
                    {featureName: 'draw', featureValue: 3, featureLink: null},
                    {featureName: 'loose', featureValue: 3, featureLink: null},
                    {featureName: 'goalZ', featureValue: 3, featureLink: null},
                    {featureName: 'goalK', featureValue: 3, featureLink: null},
                    {featureName: 'goalSub', featureValue: 3, featureLink: null},
                    {featureName: 'score', featureValue: 3, featureLink: null},
                ]
            },

        ]
    }
];

const matchSummaryData = {
    tableHeader: ['نام تیم', 'نتیجه', 'نام تیم', 'تاریخ'],
    tableBody: [
        {
            league_season: 'لیگ برتر(97-98)',
            matches: [{
                team1Name: 'mancity',
                team1Link: 'https://www.google.com',
                team2Name: 'arsenal',
                team2Link: 'https://www.google.com',
                team1Goal: '2',
                team2Goal: '1',
                date: 'امروز'
            },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
                {
                    team1Name: 'mancity',
                    team1Link: 'https://www.google.com',
                    team2Name: 'arsenal',
                    team2Link: 'https://www.google.com',
                    team1Goal: '2',
                    team2Goal: '1',
                    date: 'امروز'
                },
            ]
        },
    ]
};


const currentLeaguesData =
    {
        football: [
            {
                leagueName: 'لیگ قهرمانان اروپا',
                sessions: [{name: 'لیگ برتر(94-95)', link: null}, {
                    name: 'لیگ برتر(95-96)',
                    link: null
                }, {name: 'لیگ برتر(96-97)', link: null}, {name: 'لیگ برتر(97-98)', link: null}]
            },

        ],
        basketball: [
            {
                leagueName: 'لیگ قهرمانان اروپا',
                sessions: [{name: 'لیگ برتر(94-95)', link: null}, {
                    name: 'لیگ برتر(95-96)',
                    link: null
                }, {name: 'لیگ برتر(96-97)', link: null}, {name: 'لیگ برتر(97-98)', link: null}]
            },

        ],
    };

const matchData = [
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
    {team1Name: 'mancity', team2Name: 'arsenal', team1Goal: '2', team2Goal: '1', date: 'امروز'},
];
const oldLeaguesData = {
    football: [
        {
            leagueName: 'لیگ قهرمانان اروپا',
            sessions: [{name: 'لیگ برتر(94-95)', link: null}, {
                name: 'لیگ برتر(95-96)',
                link: null
            }, {name: 'لیگ برتر(96-97)', link: null}, {name: 'لیگ برتر(97-98)', link: null}]
        },

    ],
    basketball: [
        {
            leagueName: 'لیگ قهرمانان اروپا',
            sessions: [{name: 'لیگ برتر(94-95)', link: null}, {
                name: 'لیگ برتر(95-96)',
                link: null
            }, {name: 'لیگ برتر(96-97)', link: null}, {name: 'لیگ برتر(97-98)', link: null}]
        },

    ],
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport: "football",
            session: 'لیگ برتر(97-98)',
            teams: null,
            matchSummaryData: null,
            current_leagues: null,
            old_leagues: null,
            get: false,
        };
        this.setSession = this.setSession.bind(this)
        this.getWeeks = this.getWeeks.bind(this)
        this.get_weeks_match = this.get_weeks_match.bind(this)
        this.get_data()
    }


    get_data() {
        let url = window.location.href
        url = url.replace('3', '8')
        if (localStorage.getItem('Authorization') != null) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
        }
        axios.defaults.withCredentials = true;
        axios.get(url).then(response => {
            this.setState({
                teams: response.data['teams'],
                matchSummaryData: response.data['matchSummaryData'],
                current_leagues: response.data['current_leagues'],
                old_leagues: response.data['old_leagues'],
                get: true,
            })
        })
    }


    handleSelectorChange = (selectedOption) => {
        this.setState({selectedSport: selectedOption.value});
    };

    getTableRows() {
        return this.props.leagTeams.map(() => {
            return (
                <Table.Row active={false}>
                    <Table.Cell>John</Table.Cell>
                    <Table.Cell>Selected</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            )
        })
    }

    setSession(session) {
        this.setState({session: session})
    }

    getWeeks() {
        let options = [];
        for (let i = 1; i < this.state.teams[0]['tableData'].length * 2 - 1; i++) {
            options.push({key: i, text: i, value: i})
        }
        return options;
    }

    get_weeks_match(event, data) {
        this.setState({
            get: false,
        })
        let url = window.location.href;
        url = url.replace('3', '8');
        axios.defaults.withCredentials = true;
        let self = this
        let bodyFormData = new FormData();
        bodyFormData.set('type', 'mtach_weeks');
        bodyFormData.set('week', data.value);
        axios({
            method: 'post',
            url: url,
            data: bodyFormData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(response => {
            console.log(response);
            self.setState({
                matchSummaryData:response.data['matchSummaryData'],
                get: true,
            })

        })
    }

    render() {
        if (this.state.get === false) return (<Loader/>);
        const options = [
            {value: 'football', label: 'فوتبال'},
            {value: 'basketball', label: 'بسکتبال'},
        ];
        let body =
            <Grid style={{width: '100%'}}>

                <Grid.Row>

                    <Grid.Column width={9}>
                        <Grid.Row>
                            <LeagueTable leagueData={this.state.teams}/>
                        </Grid.Row>
                        <Grid.Row style={{marginTop: '2vh'}}>
                            <Menu compact>
                                <Dropdown onChange={this.get_weeks_match} closeOnChange placeholder='هفته'
                                          options={this.getWeeks()} item/>
                            </Menu>
                            <MatchesSummaryTable matchesData={this.state.matchSummaryData}/>
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column width={4}>


                        <Grid.Row>
                            <LeagueSeasons type={'لیگ های جاری'} leaguesData={this.state.current_leagues}/>
                        </Grid.Row>
                        <Grid.Row style={{margin: '1vh auto'}}>
                            <LeagueSeasons type={'لیگ های قدیمی'} leaguesData={this.state.old_leagues}/>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Adv
                            link={'http://ads.farakav.com/clk?av=7_QN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1'}
                            advertisement={'https://static.farakav.com/v3/static/bpx/00910575.gif'}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <div>
                <Template {...this.props} body={body}/>
            </div>
        );
    }
}

export default App;