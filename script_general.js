(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","start":"this.init()","children":["this.MainViewer"],"hash": "0a60dff8700a73fd01c0860ee80b6b5bdce2873beb78a4d382545d27ce480d2d", "definitions": [{"thumbnailUrl":"media/album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_t.png","label":trans('album_4AF90139_4659_874D_41C6_8FDB9C3E18C8.label'),"class":"PhotoAlbum","playList":"this.album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_AlbumPlayList","id":"album_4AF90139_4659_874D_41C6_8FDB9C3E18C8","data":{"label":"\u00c1lbum de Fotos frases de deus  (12)"}},{"progressBackgroundColor":["#000000"],"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"playbackBarRight":0,"subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"progressLeft":"33%","progressBarBorderColor":"#000000","data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBorderSize":0,"minWidth":100,"toolTipFontFamily":"Arial","minHeight":50,"subtitlesTextShadowOpacity":1,"subtitlesGap":0,"toolTipPaddingBottom":4,"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":2,"toolTipPaddingRight":6,"progressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"subtitlesFontColor":"#FFFFFF","firstTransitionDuration":0,"toolTipShadowColor":"#333138","height":"100%","vrPointerColor":"#FFFFFF","playbackBarLeft":0,"progressBottom":10,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","progressBorderColor":"#000000","width":"100%","toolTipPaddingLeft":6,"progressOpacity":0.7,"progressRight":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","subtitlesTextShadowHorizontalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeight":10,"playbackBarBackgroundOpacity":1,"playbackBarHeadBorderSize":0,"toolTipPaddingTop":4,"playbackBarHeadShadow":true,"subtitlesTextShadowColor":"#000000","propagateClick":false,"subtitlesTop":0,"playbackBarHeadWidth":6,"subtitlesFontSize":"3vmin","playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","playbackBarBorderRadius":0,"progressBarBackgroundColorDirection":"horizontal","id":"MainViewer","playbackBarProgressBorderSize":0,"subtitlesBorderColor":"#FFFFFF"},{"thumbnailUrl":"media/album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_0_t.png","label":trans('album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_0.label'),"width":564,"height":753,"class":"Photo","data":{"label":"frases de deus  (12)"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_0.png"}]},"id":"album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_0","duration":7000},{"class":"PlayList","id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","class":"PhotoAlbumPlayListItem","media":"this.album_4AF90139_4659_874D_41C6_8FDB9C3E18C8","player":"this.MainViewerPhotoAlbumPlayer"}]},{"class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer","id":"MainViewerPhotoAlbumPlayer"},{"class":"PhotoPlayList","id":"album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_AlbumPlayList","items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera"},"media":"this.album_4AF90139_4659_874D_41C6_8FDB9C3E18C8_0"}]}],"data":{"defaultLocale":"pt","textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1},"history":{},"name":"Player760","locales":{"pt":"locale/pt.txt"}},"layout":"absolute","watermark":false,"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#000000"],"gap":10,"scripts":{"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPixels":TDV.Tour.Script.getPixels,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMapLocation":TDV.Tour.Script.setMapLocation,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"playAudioList":TDV.Tour.Script.playAudioList,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"createTween":TDV.Tour.Script.createTween,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizStart":TDV.Tour.Script.quizStart,"init":TDV.Tour.Script.init,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"existsKey":TDV.Tour.Script.existsKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"registerKey":TDV.Tour.Script.registerKey,"mixObject":TDV.Tour.Script.mixObject,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setValue":TDV.Tour.Script.setValue,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"resumePlayers":TDV.Tour.Script.resumePlayers,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"downloadFile":TDV.Tour.Script.downloadFile,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"clone":TDV.Tour.Script.clone,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isPanorama":TDV.Tour.Script.isPanorama,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"openLink":TDV.Tour.Script.openLink,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"shareSocial":TDV.Tour.Script.shareSocial,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneBindings":TDV.Tour.Script.cloneBindings,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot},"minWidth":0,"minHeight":0,"scrollBarMargin":2,"propagateClick":false,"height":"100%","class":"Player","width":"100%","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.20.js.map
})();
//Generated with v2022.2.20, Sun Feb 12 2023