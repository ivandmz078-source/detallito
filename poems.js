// Textos de dominio público: Shakespeare's Sonnets, Project Gutenberg eBook #1041.
// Fuente: https://www.gutenberg.org/ebooks/1041
const poems = [
  {
    "id": 1,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto I",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "From fairest creatures we desire increase,\nThat thereby beauty's rose might never die,\nBut as the riper should by time decease,\nHis tender heir might bear his memory:\nBut thou, contracted to thine own bright eyes,\nFeed'st thy light's flame with self-substantial fuel,\nMaking a famine where abundance lies,\nThy self thy foe, to thy sweet self too cruel:\nThou that art now the world's fresh ornament,\nAnd only herald to the gaudy spring,\nWithin thine own bud buriest thy content,\nAnd tender churl mak'st waste in niggarding:\n  Pity the world, or else this glutton be,\n  To eat the world's due, by the grave and thee."
  },
  {
    "id": 2,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto II",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When forty winters shall besiege thy brow,\nAnd dig deep trenches in thy beauty's field,\nThy youth's proud livery so gazed on now,\nWill be a tatter'd weed of small worth held:\nThen being asked, where all thy beauty lies,\nWhere all the treasure of thy lusty days;\nTo say, within thine own deep sunken eyes,\nWere an all-eating shame, and thriftless praise.\nHow much more praise deserv'd thy beauty's use,\nIf thou couldst answer 'This fair child of mine\nShall sum my count, and make my old excuse,'\nProving his beauty by succession thine!\n  This were to be new made when thou art old,\n  And see thy blood warm when thou feel'st it cold."
  },
  {
    "id": 3,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto III",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Look in thy glass and tell the face thou viewest\nNow is the time that face should form another;\nWhose fresh repair if now thou not renewest,\nThou dost beguile the world, unbless some mother.\nFor where is she so fair whose unear'd womb\nDisdains the tillage of thy husbandry?\nOr who is he so fond will be the tomb,\nOf his self-love to stop posterity?\nThou art thy mother's glass and she in thee\nCalls back the lovely April of her prime;\nSo thou through windows of thine age shalt see,\nDespite of wrinkles this thy golden time.\n  But if thou live, remember'd not to be,\n  Die single and thine image dies with thee."
  },
  {
    "id": 4,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto IV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Unthrifty loveliness, why dost thou spend\nUpon thy self thy beauty's legacy?\nNature's bequest gives nothing, but doth lend,\nAnd being frank she lends to those are free:\nThen, beauteous niggard, why dost thou abuse\nThe bounteous largess given thee to give?\nProfitless usurer, why dost thou use\nSo great a sum of sums, yet canst not live?\nFor having traffic with thy self alone,\nThou of thy self thy sweet self dost deceive:\nThen how when nature calls thee to be gone,\nWhat acceptable audit canst thou leave?\n  Thy unused beauty must be tombed with thee,\n  Which, used, lives th' executor to be."
  },
  {
    "id": 5,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto V",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Those hours, that with gentle work did frame\nThe lovely gaze where every eye doth dwell,\nWill play the tyrants to the very same\nAnd that unfair which fairly doth excel;\nFor never-resting time leads summer on\nTo hideous winter, and confounds him there;\nSap checked with frost, and lusty leaves quite gone,\nBeauty o'er-snowed and bareness every where:\nThen were not summer's distillation left,\nA liquid prisoner pent in walls of glass,\nBeauty's effect with beauty were bereft,\nNor it, nor no remembrance what it was:\n  But flowers distill'd, though they with winter meet,\n  Leese but their show; their substance still lives sweet."
  },
  {
    "id": 6,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto VI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Then let not winter's ragged hand deface,\nIn thee thy summer, ere thou be distill'd:\nMake sweet some vial; treasure thou some place\nWith beauty's treasure ere it be self-kill'd.\nThat use is not forbidden usury,\nWhich happies those that pay the willing loan;\nThat's for thy self to breed another thee,\nOr ten times happier, be it ten for one;\nTen times thy self were happier than thou art,\nIf ten of thine ten times refigur'd thee:\nThen what could death do if thou shouldst depart,\nLeaving thee living in posterity?\n  Be not self-will'd, for thou art much too fair\n  To be death's conquest and make worms thine heir."
  },
  {
    "id": 7,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto VII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Lo! in the orient when the gracious light\nLifts up his burning head, each under eye\nDoth homage to his new-appearing sight,\nServing with looks his sacred majesty;\nAnd having climb'd the steep-up heavenly hill,\nResembling strong youth in his middle age,\nYet mortal looks adore his beauty still,\nAttending on his golden pilgrimage:\nBut when from highmost pitch, with weary car,\nLike feeble age, he reeleth from the day,\nThe eyes, 'fore duteous, now converted are\nFrom his low tract, and look another way:\n  So thou, thyself outgoing in thy noon:\n  Unlook'd, on diest unless thou get a son."
  },
  {
    "id": 8,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto VIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Music to hear, why hear'st thou music sadly?\nSweets with sweets war not, joy delights in joy:\nWhy lov'st thou that which thou receiv'st not gladly,\nOr else receiv'st with pleasure thine annoy?\nIf the true concord of well-tuned sounds,\nBy unions married, do offend thine ear,\nThey do but sweetly chide thee, who confounds\nIn singleness the parts that thou shouldst bear.\nMark how one string, sweet husband to another,\nStrikes each in each by mutual ordering;\nResembling sire and child and happy mother,\nWho, all in one, one pleasing note do sing:\n  Whose speechless song being many, seeming one,\n  Sings this to thee: 'Thou single wilt prove none.'"
  },
  {
    "id": 9,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto IX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Is it for fear to wet a widow's eye,\nThat thou consum'st thy self in single life?\nAh! if thou issueless shalt hap to die,\nThe world will wail thee like a makeless wife;\nThe world will be thy widow and still weep\nThat thou no form of thee hast left behind,\nWhen every private widow well may keep\nBy children's eyes, her husband's shape in mind:\nLook! what an unthrift in the world doth spend\nShifts but his place, for still the world enjoys it;\nBut beauty's waste hath in the world an end,\nAnd kept unused the user so destroys it.\n  No love toward others in that bosom sits\n  That on himself such murd'rous shame commits."
  },
  {
    "id": 10,
    "chapter": 1,
    "chapterTitle": "Cuando nuestros caminos se encontraron",
    "title": "Soneto X",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "For shame! deny that thou bear'st love to any,\nWho for thy self art so unprovident.\nGrant, if thou wilt, thou art belov'd of many,\nBut that thou none lov'st is most evident:\nFor thou art so possess'd with murderous hate,\nThat 'gainst thy self thou stick'st not to conspire,\nSeeking that beauteous roof to ruinate\nWhich to repair should be thy chief desire.\nO! change thy thought, that I may change my mind:\nShall hate be fairer lodg'd than gentle love?\nBe, as thy presence is, gracious and kind,\nOr to thyself at least kind-hearted prove:\n  Make thee another self for love of me,\n  That beauty still may live in thine or thee."
  },
  {
    "id": 11,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "As fast as thou shalt wane, so fast thou grow'st,\nIn one of thine, from that which thou departest;\nAnd that fresh blood which youngly thou bestow'st,\nThou mayst call thine when thou from youth convertest,\nHerein lives wisdom, beauty, and increase;\nWithout this folly, age, and cold decay:\nIf all were minded so, the times should cease\nAnd threescore year would make the world away.\nLet those whom nature hath not made for store,\nHarsh, featureless, and rude, barrenly perish:\nLook, whom she best endow'd, she gave thee more;\nWhich bounteous gift thou shouldst in bounty cherish:\n  She carv'd thee for her seal, and meant thereby,\n  Thou shouldst print more, not let that copy die."
  },
  {
    "id": 12,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When I do count the clock that tells the time,\nAnd see the brave day sunk in hideous night;\nWhen I behold the violet past prime,\nAnd sable curls, all silvered o'er with white;\nWhen lofty trees I see barren of leaves,\nWhich erst from heat did canopy the herd,\nAnd summer's green all girded up in sheaves,\nBorne on the bier with white and bristly beard,\nThen of thy beauty do I question make,\nThat thou among the wastes of time must go,\nSince sweets and beauties do themselves forsake\nAnd die as fast as they see others grow;\n  And nothing 'gainst Time's scythe can make defence\n  Save breed, to brave him when he takes thee hence."
  },
  {
    "id": 13,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "O! that you were your self; but, love you are\nNo longer yours, than you your self here live:\nAgainst this coming end you should prepare,\nAnd your sweet semblance to some other give:\nSo should that beauty which you hold in lease\nFind no determination; then you were\nYourself again, after yourself's decease,\nWhen your sweet issue your sweet form should bear.\nWho lets so fair a house fall to decay,\nWhich husbandry in honour might uphold,\nAgainst the stormy gusts of winter's day\nAnd barren rage of death's eternal cold?\n  O! none but unthrifts. Dear my love, you know,\n  You had a father: let your son say so."
  },
  {
    "id": 14,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Not from the stars do I my judgement pluck;\nAnd yet methinks I have astronomy,\nBut not to tell of good or evil luck,\nOf plagues, of dearths, or seasons' quality;\nNor can I fortune to brief minutes tell,\nPointing to each his thunder, rain and wind,\nOr say with princes if it shall go well\nBy oft predict that I in heaven find:\nBut from thine eyes my knowledge I derive,\nAnd constant stars in them I read such art\nAs 'Truth and beauty shall together thrive,\nIf from thyself, to store thou wouldst convert';\n  Or else of thee this I prognosticate:\n  'Thy end is truth's and beauty's doom and date.'"
  },
  {
    "id": 15,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When I consider every thing that grows\nHolds in perfection but a little moment,\nThat this huge stage presenteth nought but shows\nWhereon the stars in secret influence comment;\nWhen I perceive that men as plants increase,\nCheered and checked even by the self-same sky,\nVaunt in their youthful sap, at height decrease,\nAnd wear their brave state out of memory;\nThen the conceit of this inconstant stay\nSets you most rich in youth before my sight,\nWhere wasteful Time debateth with decay\nTo change your day of youth to sullied night,\n  And all in war with Time for love of you,\n  As he takes from you, I engraft you new."
  },
  {
    "id": 16,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "But wherefore do not you a mightier way\nMake war upon this bloody tyrant, Time?\nAnd fortify your self in your decay\nWith means more blessed than my barren rhyme?\nNow stand you on the top of happy hours,\nAnd many maiden gardens, yet unset,\nWith virtuous wish would bear you living flowers,\nMuch liker than your painted counterfeit:\nSo should the lines of life that life repair,\nWhich this, Time's pencil, or my pupil pen,\nNeither in inward worth nor outward fair,\nCan make you live your self in eyes of men.\n  To give away yourself, keeps yourself still,\n  And you must live, drawn by your own sweet skill."
  },
  {
    "id": 17,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Who will believe my verse in time to come,\nIf it were fill'd with your most high deserts?\nThough yet heaven knows it is but as a tomb\nWhich hides your life, and shows not half your parts.\nIf I could write the beauty of your eyes,\nAnd in fresh numbers number all your graces,\nThe age to come would say 'This poet lies;\nSuch heavenly touches ne'er touch'd earthly faces.'\nSo should my papers, yellow'd with their age,\nBe scorn'd, like old men of less truth than tongue,\nAnd your true rights be term'd a poet's rage\nAnd stretched metre of an antique song:\n  But were some child of yours alive that time,\n  You should live twice,--in it, and in my rhyme."
  },
  {
    "id": 18,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date:\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd,\nAnd every fair from fair sometime declines,\nBy chance, or nature's changing course untrimm'd:\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st,\nNor shall death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st,\n  So long as men can breathe, or eyes can see,\n  So long lives this, and this gives life to thee."
  },
  {
    "id": 19,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Devouring Time, blunt thou the lion's paws,\nAnd make the earth devour her own sweet brood;\nPluck the keen teeth from the fierce tiger's jaws,\nAnd burn the long-liv'd phoenix, in her blood;\nMake glad and sorry seasons as thou fleets,\nAnd do whate'er thou wilt, swift-footed Time,\nTo the wide world and all her fading sweets;\nBut I forbid thee one most heinous crime:\nO! carve not with thy hours my love's fair brow,\nNor draw no lines there with thine antique pen;\nHim in thy course untainted do allow\nFor beauty's pattern to succeeding men.\n  Yet, do thy worst old Time: despite thy wrong,\n  My love shall in my verse ever live young."
  },
  {
    "id": 20,
    "chapter": 2,
    "chapterTitle": "Las conversaciones que nos acercaron",
    "title": "Soneto XX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "A woman's face with nature's own hand painted,\nHast thou, the master mistress of my passion;\nA woman's gentle heart, but not acquainted\nWith shifting change, as is false women's fashion:\nAn eye more bright than theirs, less false in rolling,\nGilding the object whereupon it gazeth;\nA man in hue all 'hues' in his controlling,\nWhich steals men's eyes and women's souls amazeth.\nAnd for a woman wert thou first created;\nTill Nature, as she wrought thee, fell a-doting,\nAnd by addition me of thee defeated,\nBy adding one thing to my purpose nothing.\n  But since she prick'd thee out for women's pleasure,\n  Mine be thy love and thy love's use their treasure."
  },
  {
    "id": 21,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "So is it not with me as with that Muse,\nStirr'd by a painted beauty to his verse,\nWho heaven itself for ornament doth use\nAnd every fair with his fair doth rehearse,\nMaking a couplement of proud compare.\nWith sun and moon, with earth and sea's rich gems,\nWith April's first-born flowers, and all things rare,\nThat heaven's air in this huge rondure hems.\nO! let me, true in love, but truly write,\nAnd then believe me, my love is as fair\nAs any mother's child, though not so bright\nAs those gold candles fix'd in heaven's air:\n  Let them say more that like of hearsay well;\n  I will not praise that purpose not to sell."
  },
  {
    "id": 22,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "My glass shall not persuade me I am old,\nSo long as youth and thou are of one date;\nBut when in thee time's furrows I behold,\nThen look I death my days should expiate.\nFor all that beauty that doth cover thee,\nIs but the seemly raiment of my heart,\nWhich in thy breast doth live, as thine in me:\nHow can I then be elder than thou art?\nO! therefore love, be of thyself so wary\nAs I, not for myself, but for thee will;\nBearing thy heart, which I will keep so chary\nAs tender nurse her babe from faring ill.\n  Presume not on thy heart when mine is slain,\n  Thou gav'st me thine not to give back again."
  },
  {
    "id": 23,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "As an unperfect actor on the stage,\nWho with his fear is put beside his part,\nOr some fierce thing replete with too much rage,\nWhose strength's abundance weakens his own heart;\nSo I, for fear of trust, forget to say\nThe perfect ceremony of love's rite,\nAnd in mine own love's strength seem to decay,\nO'ercharg'd with burthen of mine own love's might.\nO! let my looks be then the eloquence\nAnd dumb presagers of my speaking breast,\nWho plead for love, and look for recompense,\nMore than that tongue that more hath more express'd.\n  O! learn to read what silent love hath writ:\n  To hear with eyes belongs to love's fine wit."
  },
  {
    "id": 24,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Mine eye hath play'd the painter and hath stell'd,\nThy beauty's form in table of my heart;\nMy body is the frame wherein 'tis held,\nAnd perspective it is best painter's art.\nFor through the painter must you see his skill,\nTo find where your true image pictur'd lies,\nWhich in my bosom's shop is hanging still,\nThat hath his windows glazed with thine eyes.\nNow see what good turns eyes for eyes have done:\nMine eyes have drawn thy shape, and thine for me\nAre windows to my breast, where-through the sun\nDelights to peep, to gaze therein on thee;\n  Yet eyes this cunning want to grace their art,\n  They draw but what they see, know not the heart."
  },
  {
    "id": 25,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Let those who are in favour with their stars\nOf public honour and proud titles boast,\nWhilst I, whom fortune of such triumph bars\nUnlook'd for joy in that I honour most.\nGreat princes' favourites their fair leaves spread\nBut as the marigold at the sun's eye,\nAnd in themselves their pride lies buried,\nFor at a frown they in their glory die.\nThe painful warrior famoused for fight,\nAfter a thousand victories once foil'd,\nIs from the book of honour razed quite,\nAnd all the rest forgot for which he toil'd:\n  Then happy I, that love and am belov'd,\n  Where I may not remove nor be remov'd."
  },
  {
    "id": 26,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Lord of my love, to whom in vassalage\nThy merit hath my duty strongly knit,\nTo thee I send this written embassage,\nTo witness duty, not to show my wit:\nDuty so great, which wit so poor as mine\nMay make seem bare, in wanting words to show it,\nBut that I hope some good conceit of thine\nIn thy soul's thought, all naked, will bestow it:\nTill whatsoever star that guides my moving,\nPoints on me graciously with fair aspect,\nAnd puts apparel on my tatter'd loving,\nTo show me worthy of thy sweet respect:\n  Then may I dare to boast how I do love thee;\n  Till then, not show my head where thou mayst prove me."
  },
  {
    "id": 27,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Weary with toil, I haste me to my bed,\nThe dear respose for limbs with travel tir'd;\nBut then begins a journey in my head\nTo work my mind, when body's work's expired:\nFor then my thoughts--from far where I abide--\nIntend a zealous pilgrimage to thee,\nAnd keep my drooping eyelids open wide,\nLooking on darkness which the blind do see:\nSave that my soul's imaginary sight\nPresents thy shadow to my sightless view,\nWhich, like a jewel hung in ghastly night,\nMakes black night beauteous, and her old face new.\n  Lo! thus, by day my limbs, by night my mind,\n  For thee, and for myself, no quiet find."
  },
  {
    "id": 28,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "How can I then return in happy plight,\nThat am debarre'd the benefit of rest?\nWhen day's oppression is not eas'd by night,\nBut day by night and night by day oppress'd,\nAnd each, though enemies to either's reign,\nDo in consent shake hands to torture me,\nThe one by toil, the other to complain\nHow far I toil, still farther off from thee.\nI tell the day, to please him thou art bright,\nAnd dost him grace when clouds do blot the heaven:\nSo flatter I the swart-complexion'd night,\nWhen sparkling stars twire not thou gild'st the even.\n  But day doth daily draw my sorrows longer,\n  And night doth nightly make grief's length seem stronger."
  },
  {
    "id": 29,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When in disgrace with fortune and men's eyes\nI all alone beweep my outcast state,\nAnd trouble deaf heaven with my bootless cries,\nAnd look upon myself, and curse my fate,\nWishing me like to one more rich in hope,\nFeatur'd like him, like him with friends possess'd,\nDesiring this man's art, and that man's scope,\nWith what I most enjoy contented least;\nYet in these thoughts my self almost despising,\nHaply I think on thee,-- and then my state,\nLike to the lark at break of day arising\nFrom sullen earth, sings hymns at heaven's gate;\n  For thy sweet love remember'd such wealth brings\n  That then I scorn to change my state with kings."
  },
  {
    "id": 30,
    "chapter": 3,
    "chapterTitle": "Descubrirte poco a poco",
    "title": "Soneto XXX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When to the sessions of sweet silent thought\nI summon up remembrance of things past,\nI sigh the lack of many a thing I sought,\nAnd with old woes new wail my dear time's waste:\nThen can I drown an eye, unused to flow,\nFor precious friends hid in death's dateless night,\nAnd weep afresh love's long since cancell'd woe,\nAnd moan the expense of many a vanish'd sight:\nThen can I grieve at grievances foregone,\nAnd heavily from woe to woe tell o'er\nThe sad account of fore-bemoaned moan,\nWhich I new pay as if not paid before.\n  But if the while I think on thee, dear friend,\n  All losses are restor'd and sorrows end."
  },
  {
    "id": 31,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Thy bosom is endeared with all hearts,\nWhich I by lacking have supposed dead;\nAnd there reigns Love, and all Love's loving parts,\nAnd all those friends which I thought buried.\nHow many a holy and obsequious tear\nHath dear religious love stol'n from mine eye,\nAs interest of the dead, which now appear\nBut things remov'd that hidden in thee lie!\nThou art the grave where buried love doth live,\nHung with the trophies of my lovers gone,\nWho all their parts of me to thee did give,\nThat due of many now is thine alone:\n  Their images I lov'd, I view in thee,\n  And thou--all they--hast all the all of me."
  },
  {
    "id": 32,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "If thou survive my well-contented day,\nWhen that churl Death my bones with dust shall cover\nAnd shalt by fortune once more re-survey\nThese poor rude lines of thy deceased lover,\nCompare them with the bett'ring of the time,\nAnd though they be outstripp'd by every pen,\nReserve them for my love, not for their rhyme,\nExceeded by the height of happier men.\nO! then vouchsafe me but this loving thought:\n'Had my friend's Muse grown with this growing age,\nA dearer birth than this his love had brought,\nTo march in ranks of better equipage:\n  But since he died and poets better prove,\n  Theirs for their style I'll read, his for his love'."
  },
  {
    "id": 33,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Full many a glorious morning have I seen\nFlatter the mountain tops with sovereign eye,\nKissing with golden face the meadows green,\nGilding pale streams with heavenly alchemy;\nAnon permit the basest clouds to ride\nWith ugly rack on his celestial face,\nAnd from the forlorn world his visage hide,\nStealing unseen to west with this disgrace:\nEven so my sun one early morn did shine,\nWith all triumphant splendour on my brow;\nBut out! alack! he was but one hour mine,\nThe region cloud hath mask'd him from me now.\n  Yet him for this my love no whit disdaineth;\n  Suns of the world may stain when heaven's sun staineth."
  },
  {
    "id": 34,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Why didst thou promise such a beauteous day,\nAnd make me travel forth without my cloak,\nTo let base clouds o'ertake me in my way,\nHiding thy bravery in their rotten smoke?\n'Tis not enough that through the cloud thou break,\nTo dry the rain on my storm-beaten face,\nFor no man well of such a salve can speak,\nThat heals the wound, and cures not the disgrace:\nNor can thy shame give physic to my grief;\nThough thou repent, yet I have still the loss:\nThe offender's sorrow lends but weak relief\nTo him that bears the strong offence's cross.\n  Ah! but those tears are pearl which thy love sheds,\n  And they are rich and ransom all ill deeds."
  },
  {
    "id": 35,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "No more be griev'd at that which thou hast done:\nRoses have thorns, and silver fountains mud:\nClouds and eclipses stain both moon and sun,\nAnd loathsome canker lives in sweetest bud.\nAll men make faults, and even I in this,\nAuthorizing thy trespass with compare,\nMyself corrupting, salving thy amiss,\nExcusing thy sins more than thy sins are;\nFor to thy sensual fault I bring in sense,--\nThy adverse party is thy advocate,--\nAnd 'gainst myself a lawful plea commence:\nSuch civil war is in my love and hate,\n  That I an accessary needs must be,\n  To that sweet thief which sourly robs from me."
  },
  {
    "id": 36,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Let me confess that we two must be twain,\nAlthough our undivided loves are one:\nSo shall those blots that do with me remain,\nWithout thy help, by me be borne alone.\nIn our two loves there is but one respect,\nThough in our lives a separable spite,\nWhich though it alter not love's sole effect,\nYet doth it steal sweet hours from love's delight.\nI may not evermore acknowledge thee,\nLest my bewailed guilt should do thee shame,\nNor thou with public kindness honour me,\nUnless thou take that honour from thy name:\n  But do not so, I love thee in such sort,\n  As thou being mine, mine is thy good report."
  },
  {
    "id": 37,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "As a decrepit father takes delight\nTo see his active child do deeds of youth,\nSo I, made lame by Fortune's dearest spite,\nTake all my comfort of thy worth and truth;\nFor whether beauty, birth, or wealth, or wit,\nOr any of these all, or all, or more,\nEntitled in thy parts, do crowned sit,\nI make my love engrafted, to this store:\nSo then I am not lame, poor, nor despis'd,\nWhilst that this shadow doth such substance give\nThat I in thy abundance am suffic'd,\nAnd by a part of all thy glory live.\n  Look what is best, that best I wish in thee:\n  This wish I have; then ten times happy me!"
  },
  {
    "id": 38,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "How can my muse want subject to invent,\nWhile thou dost breathe, that pour'st into my verse\nThine own sweet argument, too excellent\nFor every vulgar paper to rehearse?\nO! give thy self the thanks, if aught in me\nWorthy perusal stand against thy sight;\nFor who's so dumb that cannot write to thee,\nWhen thou thy self dost give invention light?\nBe thou the tenth Muse, ten times more in worth\nThan those old nine which rhymers invocate;\nAnd he that calls on thee, let him bring forth\nEternal numbers to outlive long date.\n  If my slight muse do please these curious days,\n  The pain be mine, but thine shall be the praise."
  },
  {
    "id": 39,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XXXIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "O! how thy worth with manners may I sing,\nWhen thou art all the better part of me?\nWhat can mine own praise to mine own self bring?\nAnd what is't but mine own when I praise thee?\nEven for this, let us divided live,\nAnd our dear love lose name of single one,\nThat by this separation I may give\nThat due to thee which thou deserv'st alone.\nO absence! what a torment wouldst thou prove,\nWere it not thy sour leisure gave sweet leave,\nTo entertain the time with thoughts of love,\nWhich time and thoughts so sweetly doth deceive,\n  And that thou teachest how to make one twain,\n  By praising him here who doth hence remain."
  },
  {
    "id": 40,
    "chapter": 4,
    "chapterTitle": "La ternura de las pequeñas cosas",
    "title": "Soneto XL",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Take all my loves, my love, yea take them all;\nWhat hast thou then more than thou hadst before?\nNo love, my love, that thou mayst true love call;\nAll mine was thine, before thou hadst this more.\nThen, if for my love, thou my love receivest,\nI cannot blame thee, for my love thou usest;\nBut yet be blam'd, if thou thy self deceivest\nBy wilful taste of what thyself refusest.\nI do forgive thy robbery, gentle thief,\nAlthough thou steal thee all my poverty:\nAnd yet, love knows it is a greater grief\nTo bear love's wrong, than hate's known injury.\n  Lascivious grace, in whom all ill well shows,\n  Kill me with spites yet we must not be foes."
  },
  {
    "id": 41,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Those pretty wrongs that liberty commits,\nWhen I am sometime absent from thy heart,\nThy beauty, and thy years full well befits,\nFor still temptation follows where thou art.\nGentle thou art, and therefore to be won,\nBeauteous thou art, therefore to be assail'd;\nAnd when a woman woos, what woman's son\nWill sourly leave her till he have prevail'd?\nAy me! but yet thou mightst my seat forbear,\nAnd chide thy beauty and thy straying youth,\nWho lead thee in their riot even there\nWhere thou art forced to break a twofold truth:--\n  Hers by thy beauty tempting her to thee,\n  Thine by thy beauty being false to me."
  },
  {
    "id": 42,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "That thou hast her it is not all my grief,\nAnd yet it may be said I loved her dearly;\nThat she hath thee is of my wailing chief,\nA loss in love that touches me more nearly.\nLoving offenders thus I will excuse ye:\nThou dost love her, because thou know'st I love her;\nAnd for my sake even so doth she abuse me,\nSuffering my friend for my sake to approve her.\nIf I lose thee, my loss is my love's gain,\nAnd losing her, my friend hath found that loss;\nBoth find each other, and I lose both twain,\nAnd both for my sake lay on me this cross:\n  But here's the joy; my friend and I are one;\n  Sweet flattery! then she loves but me alone."
  },
  {
    "id": 43,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When most I wink, then do mine eyes best see,\nFor all the day they view things unrespected;\nBut when I sleep, in dreams they look on thee,\nAnd darkly bright, are bright in dark directed.\nThen thou, whose shadow shadows doth make bright,\nHow would thy shadow's form form happy show\nTo the clear day with thy much clearer light,\nWhen to unseeing eyes thy shade shines so!\nHow would, I say, mine eyes be blessed made\nBy looking on thee in the living day,\nWhen in dead night thy fair imperfect shade\nThrough heavy sleep on sightless eyes doth stay!\n  All days are nights to see till I see thee,\n  And nights bright days when dreams do show thee me."
  },
  {
    "id": 44,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "If the dull substance of my flesh were thought,\nInjurious distance should not stop my way;\nFor then despite of space I would be brought,\nFrom limits far remote, where thou dost stay.\nNo matter then although my foot did stand\nUpon the farthest earth remov'd from thee;\nFor nimble thought can jump both sea and land,\nAs soon as think the place where he would be.\nBut, ah! thought kills me that I am not thought,\nTo leap large lengths of miles when thou art gone,\nBut that so much of earth and water wrought,\nI must attend time's leisure with my moan;\n  Receiving nought by elements so slow\n  But heavy tears, badges of either's woe."
  },
  {
    "id": 45,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "The other two, slight air, and purging fire\nAre both with thee, wherever I abide;\nThe first my thought, the other my desire,\nThese present-absent with swift motion slide.\nFor when these quicker elements are gone\nIn tender embassy of love to thee,\nMy life, being made of four, with two alone\nSinks down to death, oppress'd with melancholy;\nUntil life's composition be recur'd\nBy those swift messengers return'd from thee,\nWho even but now come back again, assur'd,\nOf thy fair health, recounting it to me:\n  This told, I joy; but then no longer glad,\n  I send them back again, and straight grow sad."
  },
  {
    "id": 46,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Mine eye and heart are at a mortal war,\nHow to divide the conquest of thy sight;\nMine eye my heart thy picture's sight would bar,\nMy heart mine eye the freedom of that right.\nMy heart doth plead that thou in him dost lie,--\nA closet never pierc'd with crystal eyes--\nBut the defendant doth that plea deny,\nAnd says in him thy fair appearance lies.\nTo side this title is impannelled\nA quest of thoughts, all tenants to the heart;\nAnd by their verdict is determined\nThe clear eye's moiety, and the dear heart's part:\n  As thus; mine eye's due is thy outward part,\n  And my heart's right, thy inward love of heart."
  },
  {
    "id": 47,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Betwixt mine eye and heart a league is took,\nAnd each doth good turns now unto the other:\nWhen that mine eye is famish'd for a look,\nOr heart in love with sighs himself doth smother,\nWith my love's picture then my eye doth feast,\nAnd to the painted banquet bids my heart;\nAnother time mine eye is my heart's guest,\nAnd in his thoughts of love doth share a part:\nSo, either by thy picture or my love,\nThy self away, art present still with me;\nFor thou not farther than my thoughts canst move,\nAnd I am still with them, and they with thee;\n  Or, if they sleep, thy picture in my sight\n  Awakes my heart, to heart's and eye's delight."
  },
  {
    "id": 48,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "How careful was I when I took my way,\nEach trifle under truest bars to thrust,\nThat to my use it might unused stay\nFrom hands of falsehood, in sure wards of trust!\nBut thou, to whom my jewels trifles are,\nMost worthy comfort, now my greatest grief,\nThou best of dearest, and mine only care,\nArt left the prey of every vulgar thief.\nThee have I not lock'd up in any chest,\nSave where thou art not, though I feel thou art,\nWithin the gentle closure of my breast,\nFrom whence at pleasure thou mayst come and part;\n  And even thence thou wilt be stol'n I fear,\n  For truth proves thievish for a prize so dear."
  },
  {
    "id": 49,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto XLIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Against that time, if ever that time come,\nWhen I shall see thee frown on my defects,\nWhen as thy love hath cast his utmost sum,\nCall'd to that audit by advis'd respects;\nAgainst that time when thou shalt strangely pass,\nAnd scarcely greet me with that sun, thine eye,\nWhen love, converted from the thing it was,\nShall reasons find of settled gravity;\nAgainst that time do I ensconce me here,\nWithin the knowledge of mine own desert,\nAnd this my hand, against my self uprear,\nTo guard the lawful reasons on thy part:\n  To leave poor me thou hast the strength of laws,\n  Since why to love I can allege no cause."
  },
  {
    "id": 50,
    "chapter": 5,
    "chapterTitle": "Todo lo que me hace admirarte",
    "title": "Soneto L",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "How heavy do I journey on the way,\nWhen what I seek, my weary travel's end,\nDoth teach that ease and that repose to say,\n'Thus far the miles are measured from thy friend!'\nThe beast that bears me, tired with my woe,\nPlods dully on, to bear that weight in me,\nAs if by some instinct the wretch did know\nHis rider lov'd not speed, being made from thee:\nThe bloody spur cannot provoke him on,\nThat sometimes anger thrusts into his hide,\nWhich heavily he answers with a groan,\nMore sharp to me than spurring to his side;\n  For that same groan doth put this in my mind,\n  My grief lies onward, and my joy behind."
  },
  {
    "id": 51,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Thus can my love excuse the slow offence\nOf my dull bearer when from thee I speed:\nFrom where thou art why should I haste me thence?\nTill I return, of posting is no need.\nO! what excuse will my poor beast then find,\nWhen swift extremity can seem but slow?\nThen should I spur, though mounted on the wind,\nIn winged speed no motion shall I know,\nThen can no horse with my desire keep pace;\nTherefore desire, of perfect'st love being made,\nShall neigh--no dull flesh--in his fiery race;\nBut love, for love, thus shall excuse my jade,--\n  'Since from thee going, he went wilful-slow,\n  Towards thee I'll run, and give him leave to go.'"
  },
  {
    "id": 52,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "So am I as the rich, whose blessed key,\nCan bring him to his sweet up-locked treasure,\nThe which he will not every hour survey,\nFor blunting the fine point of seldom pleasure.\nTherefore are feasts so solemn and so rare,\nSince, seldom coming in that long year set,\nLike stones of worth they thinly placed are,\nOr captain jewels in the carcanet.\nSo is the time that keeps you as my chest,\nOr as the wardrobe which the robe doth hide,\nTo make some special instant special-blest,\nBy new unfolding his imprison'd pride.\n  Blessed are you whose worthiness gives scope,\n  Being had, to triumph; being lacked, to hope."
  },
  {
    "id": 53,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "What is your substance, whereof are you made,\nThat millions of strange shadows on you tend?\nSince every one, hath every one, one shade,\nAnd you but one, can every shadow lend.\nDescribe Adonis, and the counterfeit\nIs poorly imitated after you;\nOn Helen's cheek all art of beauty set,\nAnd you in Grecian tires are painted new:\nSpeak of the spring, and foison of the year,\nThe one doth shadow of your beauty show,\nThe other as your bounty doth appear;\nAnd you in every blessed shape we know.\n  In all external grace you have some part,\n  But you like none, none you, for constant heart."
  },
  {
    "id": 54,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "O! how much more doth beauty beauteous seem\nBy that sweet ornament which truth doth give.\nThe rose looks fair, but fairer we it deem\nFor that sweet odour, which doth in it live.\nThe canker blooms have full as deep a dye\nAs the perfumed tincture of the roses.\nHang on such thorns, and play as wantonly\nWhen summer's breath their masked buds discloses:\nBut, for their virtue only is their show,\nThey live unwoo'd, and unrespected fade;\nDie to themselves. Sweet roses do not so;\nOf their sweet deaths, are sweetest odours made:\n  And so of you, beauteous and lovely youth,\n  When that shall vade, by verse distills your truth."
  },
  {
    "id": 55,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Not marble, nor the gilded monuments\nOf princes, shall outlive this powerful rhyme;\nBut you shall shine more bright in these contents\nThan unswept stone, besmear'd with sluttish time.\nWhen wasteful war shall statues overturn,\nAnd broils root out the work of masonry,\nNor Mars his sword, nor war's quick fire shall burn\nThe living record of your memory.\n'Gainst death, and all-oblivious enmity\nShall you pace forth; your praise shall still find room\nEven in the eyes of all posterity\nThat wear this world out to the ending doom.\n  So, till the judgment that yourself arise,\n  You live in this, and dwell in lovers' eyes."
  },
  {
    "id": 56,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Sweet love, renew thy force; be it not said\nThy edge should blunter be than appetite,\nWhich but to-day by feeding is allay'd,\nTo-morrow sharpened in his former might:\nSo, love, be thou, although to-day thou fill\nThy hungry eyes, even till they wink with fulness,\nTo-morrow see again, and do not kill\nThe spirit of love, with a perpetual dulness.\nLet this sad interim like the ocean be\nWhich parts the shore, where two contracted new\nCome daily to the banks, that when they see\nReturn of love, more blest may be the view;\n  Or call it winter, which being full of care,\n  Makes summer's welcome, thrice more wished, more rare."
  },
  {
    "id": 57,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Being your slave what should I do but tend,\nUpon the hours, and times of your desire?\nI have no precious time at all to spend;\nNor services to do, till you require.\nNor dare I chide the world-without-end hour,\nWhilst I, my sovereign, watch the clock for you,\nNor think the bitterness of absence sour,\nWhen you have bid your servant once adieu;\nNor dare I question with my jealous thought\nWhere you may be, or your affairs suppose,\nBut, like a sad slave, stay and think of nought\nSave, where you are, how happy you make those.\n  So true a fool is love, that in your will,\n  Though you do anything, he thinks no ill."
  },
  {
    "id": 58,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "That god forbid, that made me first your slave,\nI should in thought control your times of pleasure,\nOr at your hand the account of hours to crave,\nBeing your vassal, bound to stay your leisure!\nO! let me suffer, being at your beck,\nThe imprison'd absence of your liberty;\nAnd patience, tame to sufferance, bide each check,\nWithout accusing you of injury.\nBe where you list, your charter is so strong\nThat you yourself may privilage your time\nTo what you will; to you it doth belong\nYourself to pardon of self-doing crime.\n  I am to wait, though waiting so be hell,\n  Not blame your pleasure be it ill or well."
  },
  {
    "id": 59,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "If there be nothing new, but that which is\nHath been before, how are our brains beguil'd,\nWhich labouring for invention bear amiss\nThe second burthen of a former child!\nO! that record could with a backward look,\nEven of five hundred courses of the sun,\nShow me your image in some antique book,\nSince mind at first in character was done!\nThat I might see what the old world could say\nTo this composed wonder of your frame;\nWh'r we are mended, or wh'r better they,\nOr whether revolution be the same.\n  O! sure I am the wits of former days,\n  To subjects worse have given admiring praise."
  },
  {
    "id": 60,
    "chapter": 6,
    "chapterTitle": "Aunque todavía haya momentos por vivir",
    "title": "Soneto LX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Like as the waves make towards the pebbled shore,\nSo do our minutes hasten to their end;\nEach changing place with that which goes before,\nIn sequent toil all forwards do contend.\nNativity, once in the main of light,\nCrawls to maturity, wherewith being crown'd,\nCrooked eclipses 'gainst his glory fight,\nAnd Time that gave doth now his gift confound.\nTime doth transfix the flourish set on youth\nAnd delves the parallels in beauty's brow,\nFeeds on the rarities of nature's truth,\nAnd nothing stands but for his scythe to mow:\n  And yet to times in hope, my verse shall stand.\n  Praising thy worth, despite his cruel hand."
  },
  {
    "id": 61,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Is it thy will, thy image should keep open\nMy heavy eyelids to the weary night?\nDost thou desire my slumbers should be broken,\nWhile shadows like to thee do mock my sight?\nIs it thy spirit that thou send'st from thee\nSo far from home into my deeds to pry,\nTo find out shames and idle hours in me,\nThe scope and tenure of thy jealousy?\nO, no! thy love, though much, is not so great:\nIt is my love that keeps mine eye awake:\nMine own true love that doth my rest defeat,\nTo play the watchman ever for thy sake:\n  For thee watch I, whilst thou dost wake elsewhere,\n  From me far off, with others all too near."
  },
  {
    "id": 62,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Sin of self-love possesseth all mine eye\nAnd all my soul, and all my every part;\nAnd for this sin there is no remedy,\nIt is so grounded inward in my heart.\nMethinks no face so gracious is as mine,\nNo shape so true, no truth of such account;\nAnd for myself mine own worth do define,\nAs I all other in all worths surmount.\nBut when my glass shows me myself indeed\nBeated and chopp'd with tanned antiquity,\nMine own self-love quite contrary I read;\nSelf so self-loving were iniquity.\n  'Tis thee,--myself,--that for myself I praise,\n  Painting my age with beauty of thy days."
  },
  {
    "id": 63,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Against my love shall be as I am now,\nWith Time's injurious hand crush'd and o'erworn;\nWhen hours have drain'd his blood and fill'd his brow\nWith lines and wrinkles; when his youthful morn\nHath travell'd on to age's steepy night;\nAnd all those beauties whereof now he's king\nAre vanishing, or vanished out of sight,\nStealing away the treasure of his spring;\nFor such a time do I now fortify\nAgainst confounding age's cruel knife,\nThat he shall never cut from memory\nMy sweet love's beauty, though my lover's life:\n  His beauty shall in these black lines be seen,\n  And they shall live, and he in them still green."
  },
  {
    "id": 64,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When I have seen by Time's fell hand defac'd\nThe rich-proud cost of outworn buried age;\nWhen sometime lofty towers I see down-raz'd,\nAnd brass eternal slave to mortal rage;\nWhen I have seen the hungry ocean gain\nAdvantage on the kingdom of the shore,\nAnd the firm soil win of the watery main,\nIncreasing store with loss, and loss with store;\nWhen I have seen such interchange of state,\nOr state itself confounded, to decay;\nRuin hath taught me thus to ruminate--\nThat Time will come and take my love away.\n  This thought is as a death which cannot choose\n  But weep to have, that which it fears to lose."
  },
  {
    "id": 65,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Since brass, nor stone, nor earth, nor boundless sea,\nBut sad mortality o'ersways their power,\nHow with this rage shall beauty hold a plea,\nWhose action is no stronger than a flower?\nO! how shall summer's honey breath hold out,\nAgainst the wrackful siege of battering days,\nWhen rocks impregnable are not so stout,\nNor gates of steel so strong but Time decays?\nO fearful meditation! where, alack,\nShall Time's best jewel from Time's chest lie hid?\nOr what strong hand can hold his swift foot back?\nOr who his spoil of beauty can forbid?\n  O! none, unless this miracle have might,\n  That in black ink my love may still shine bright."
  },
  {
    "id": 66,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Tired with all these, for restful death I cry,\nAs to behold desert a beggar born,\nAnd needy nothing trimm'd in jollity,\nAnd purest faith unhappily forsworn,\nAnd gilded honour shamefully misplac'd,\nAnd maiden virtue rudely strumpeted,\nAnd right perfection wrongfully disgrac'd,\nAnd strength by limping sway disabled\nAnd art made tongue-tied by authority,\nAnd folly--doctor-like--controlling skill,\nAnd simple truth miscall'd simplicity,\nAnd captive good attending captain ill:\n  Tir'd with all these, from these would I be gone,\n  Save that, to die, I leave my love alone."
  },
  {
    "id": 67,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Ah! wherefore with infection should he live,\nAnd with his presence grace impiety,\nThat sin by him advantage should achieve,\nAnd lace itself with his society?\nWhy should false painting imitate his cheek,\nAnd steel dead seeming of his living hue?\nWhy should poor beauty indirectly seek\nRoses of shadow, since his rose is true?\nWhy should he live, now Nature bankrupt is,\nBeggar'd of blood to blush through lively veins?\nFor she hath no exchequer now but his,\nAnd proud of many, lives upon his gains.\n  O! him she stores, to show what wealth she had\n  In days long since, before these last so bad."
  },
  {
    "id": 68,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Thus is his cheek the map of days outworn,\nWhen beauty lived and died as flowers do now,\nBefore these bastard signs of fair were born,\nOr durst inhabit on a living brow;\nBefore the golden tresses of the dead,\nThe right of sepulchres, were shorn away,\nTo live a second life on second head;\nEre beauty's dead fleece made another gay:\nIn him those holy antique hours are seen,\nWithout all ornament, itself and true,\nMaking no summer of another's green,\nRobbing no old to dress his beauty new;\n  And him as for a map doth Nature store,\n  To show false Art what beauty was of yore."
  },
  {
    "id": 69,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Those parts of thee that the world's eye doth view\nWant nothing that the thought of hearts can mend;\nAll tongues--the voice of souls--give thee that due,\nUttering bare truth, even so as foes commend.\nThy outward thus with outward praise is crown'd;\nBut those same tongues, that give thee so thine own,\nIn other accents do this praise confound\nBy seeing farther than the eye hath shown.\nThey look into the beauty of thy mind,\nAnd that in guess they measure by thy deeds;\nThen--churls--their thoughts, although their eyes were kind,\nTo thy fair flower add the rank smell of weeds:\n  But why thy odour matcheth not thy show,\n  The soil is this, that thou dost common grow."
  },
  {
    "id": 70,
    "chapter": 7,
    "chapterTitle": "Nuestro pequeño universo",
    "title": "Soneto LXX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "That thou art blam'd shall not be thy defect,\nFor slander's mark was ever yet the fair;\nThe ornament of beauty is suspect,\nA crow that flies in heaven's sweetest air.\nSo thou be good, slander doth but approve\nThy worth the greater being woo'd of time;\nFor canker vice the sweetest buds doth love,\nAnd thou present'st a pure unstained prime.\nThou hast passed by the ambush of young days\nEither not assail'd, or victor being charg'd;\nYet this thy praise cannot be so thy praise,\nTo tie up envy, evermore enlarg'd,\n  If some suspect of ill mask'd not thy show,\n  Then thou alone kingdoms of hearts shouldst owe."
  },
  {
    "id": 71,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "No longer mourn for me when I am dead\nThan you shall hear the surly sullen bell\nGive warning to the world that I am fled\nFrom this vile world with vilest worms to dwell:\nNay, if you read this line, remember not\nThe hand that writ it, for I love you so,\nThat I in your sweet thoughts would be forgot,\nIf thinking on me then should make you woe.\nO! if,--I say you look upon this verse,\nWhen I perhaps compounded am with clay,\nDo not so much as my poor name rehearse;\nBut let your love even with my life decay;\n  Lest the wise world should look into your moan,\n  And mock you with me after I am gone."
  },
  {
    "id": 72,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "O! lest the world should task you to recite\nWhat merit lived in me, that you should love\nAfter my death,--dear love, forget me quite,\nFor you in me can nothing worthy prove;\nUnless you would devise some virtuous lie,\nTo do more for me than mine own desert,\nAnd hang more praise upon deceased I\nThan niggard truth would willingly impart:\nO! lest your true love may seem false in this\nThat you for love speak well of me untrue,\nMy name be buried where my body is,\nAnd live no more to shame nor me nor you.\n  For I am shamed by that which I bring forth,\n  And so should you, to love things nothing worth."
  },
  {
    "id": 73,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "That time of year thou mayst in me behold\nWhen yellow leaves, or none, or few, do hang\nUpon those boughs which shake against the cold,\nBare ruin'd choirs, where late the sweet birds sang.\nIn me thou see'st the twilight of such day\nAs after sunset fadeth in the west;\nWhich by and by black night doth take away,\nDeath's second self, that seals up all in rest.\nIn me thou see'st the glowing of such fire,\nThat on the ashes of his youth doth lie,\nAs the death-bed, whereon it must expire,\nConsum'd with that which it was nourish'd by.\n  This thou perceiv'st, which makes thy love more strong,\n  To love that well, which thou must leave ere long."
  },
  {
    "id": 74,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "But be contented: when that fell arrest\nWithout all bail shall carry me away,\nMy life hath in this line some interest,\nWhich for memorial still with thee shall stay.\nWhen thou reviewest this, thou dost review\nThe very part was consecrate to thee:\nThe earth can have but earth, which is his due;\nMy spirit is thine, the better part of me:\nSo then thou hast but lost the dregs of life,\nThe prey of worms, my body being dead;\nThe coward conquest of a wretch's knife,\nToo base of thee to be remembered.\n  The worth of that is that which it contains,\n  And that is this, and this with thee remains."
  },
  {
    "id": 75,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "So are you to my thoughts as food to life,\nOr as sweet-season'd showers are to the ground;\nAnd for the peace of you I hold such strife\nAs 'twixt a miser and his wealth is found.\nNow proud as an enjoyer, and anon\nDoubting the filching age will steal his treasure;\nNow counting best to be with you alone,\nThen better'd that the world may see my pleasure:\nSometime all full with feasting on your sight,\nAnd by and by clean starved for a look;\nPossessing or pursuing no delight,\nSave what is had, or must from you be took.\n  Thus do I pine and surfeit day by day,\n  Or gluttoning on all, or all away."
  },
  {
    "id": 76,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Why is my verse so barren of new pride,\nSo far from variation or quick change?\nWhy with the time do I not glance aside\nTo new-found methods, and to compounds strange?\nWhy write I still all one, ever the same,\nAnd keep invention in a noted weed,\nThat every word doth almost tell my name,\nShowing their birth, and where they did proceed?\nO! know sweet love I always write of you,\nAnd you and love are still my argument;\nSo all my best is dressing old words new,\nSpending again what is already spent:\n  For as the sun is daily new and old,\n  So is my love still telling what is told."
  },
  {
    "id": 77,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Thy glass will show thee how thy beauties wear,\nThy dial how thy precious minutes waste;\nThese vacant leaves thy mind's imprint will bear,\nAnd of this book, this learning mayst thou taste.\nThe wrinkles which thy glass will truly show\nOf mouthed graves will give thee memory;\nThou by thy dial's shady stealth mayst know\nTime's thievish progress to eternity.\nLook! what thy memory cannot contain,\nCommit to these waste blanks, and thou shalt find\nThose children nursed, deliver'd from thy brain,\nTo take a new acquaintance of thy mind.\n  These offices, so oft as thou wilt look,\n  Shall profit thee and much enrich thy book."
  },
  {
    "id": 78,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "So oft have I invoked thee for my Muse,\nAnd found such fair assistance in my verse\nAs every alien pen hath got my use\nAnd under thee their poesy disperse.\nThine eyes, that taught the dumb on high to sing\nAnd heavy ignorance aloft to fly,\nHave added feathers to the learned's wing\nAnd given grace a double majesty.\nYet be most proud of that which I compile,\nWhose influence is thine, and born of thee:\nIn others' works thou dost but mend the style,\nAnd arts with thy sweet graces graced be;\n  But thou art all my art, and dost advance\n  As high as learning, my rude ignorance."
  },
  {
    "id": 79,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Whilst I alone did call upon thy aid,\nMy verse alone had all thy gentle grace;\nBut now my gracious numbers are decay'd,\nAnd my sick Muse doth give an other place.\nI grant, sweet love, thy lovely argument\nDeserves the travail of a worthier pen;\nYet what of thee thy poet doth invent\nHe robs thee of, and pays it thee again.\nHe lends thee virtue, and he stole that word\nFrom thy behaviour; beauty doth he give,\nAnd found it in thy cheek: he can afford\nNo praise to thee, but what in thee doth live.\n  Then thank him not for that which he doth say,\n  Since what he owes thee, thou thyself dost pay."
  },
  {
    "id": 80,
    "chapter": 8,
    "chapterTitle": "Elegirte desde la libertad",
    "title": "Soneto LXXX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "O! how I faint when I of you do write,\nKnowing a better spirit doth use your name,\nAnd in the praise thereof spends all his might,\nTo make me tongue-tied speaking of your fame!\nBut since your worth--wide as the ocean is,--\nThe humble as the proudest sail doth bear,\nMy saucy bark, inferior far to his,\nOn your broad main doth wilfully appear.\nYour shallowest help will hold me up afloat,\nWhilst he upon your soundless deep doth ride;\nOr, being wrack'd, I am a worthless boat,\nHe of tall building, and of goodly pride:\n  Then if he thrive and I be cast away,\n  The worst was this,--my love was my decay."
  },
  {
    "id": 81,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Or I shall live your epitaph to make,\nOr you survive when I in earth am rotten;\nFrom hence your memory death cannot take,\nAlthough in me each part will be forgotten.\nYour name from hence immortal life shall have,\nThough I, once gone, to all the world must die:\nThe earth can yield me but a common grave,\nWhen you entombed in men's eyes shall lie.\nYour monument shall be my gentle verse,\nWhich eyes not yet created shall o'er-read;\nAnd tongues to be, your being shall rehearse,\nWhen all the breathers of this world are dead;\n  You still shall live,--such virtue hath my pen,--\n  Where breath most breathes, even in the mouths of men."
  },
  {
    "id": 82,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "I grant thou wert not married to my Muse,\nAnd therefore mayst without attaint o'erlook\nThe dedicated words which writers use\nOf their fair subject, blessing every book.\nThou art as fair in knowledge as in hue,\nFinding thy worth a limit past my praise;\nAnd therefore art enforced to seek anew\nSome fresher stamp of the time-bettering days.\nAnd do so, love; yet when they have devis'd,\nWhat strained touches rhetoric can lend,\nThou truly fair, wert truly sympathiz'd\nIn true plain words, by thy true-telling friend;\n  And their gross painting might be better us'd\n  Where cheeks need blood; in thee it is abus'd."
  },
  {
    "id": 83,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "I never saw that you did painting need,\nAnd therefore to your fair no painting set;\nI found, or thought I found, you did exceed\nThat barren tender of a poet's debt:\nAnd therefore have I slept in your report,\nThat you yourself, being extant, well might show\nHow far a modern quill doth come too short,\nSpeaking of worth, what worth in you doth grow.\nThis silence for my sin you did impute,\nWhich shall be most my glory being dumb;\nFor I impair not beauty being mute,\nWhen others would give life, and bring a tomb.\n  There lives more life in one of your fair eyes\n  Than both your poets can in praise devise."
  },
  {
    "id": 84,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Who is it that says most, which can say more,\nThan this rich praise,--that you alone, are you?\nIn whose confine immured is the store\nWhich should example where your equal grew.\nLean penury within that pen doth dwell\nThat to his subject lends not some small glory;\nBut he that writes of you, if he can tell\nThat you are you, so dignifies his story,\nLet him but copy what in you is writ,\nNot making worse what nature made so clear,\nAnd such a counterpart shall fame his wit,\nMaking his style admired every where.\n  You to your beauteous blessings add a curse,\n  Being fond on praise, which makes your praises worse."
  },
  {
    "id": 85,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "My tongue-tied Muse in manners holds her still,\nWhile comments of your praise richly compil'd,\nReserve their character with golden quill,\nAnd precious phrase by all the Muses fil'd.\nI think good thoughts, whilst others write good words,\nAnd like unlettered clerk still cry 'Amen'\nTo every hymn that able spirit affords,\nIn polish'd form of well-refined pen.\nHearing you praised, I say ''tis so, 'tis true,'\nAnd to the most of praise add something more;\nBut that is in my thought, whose love to you,\nThough words come hindmost, holds his rank before.\n  Then others, for the breath of words respect,\n  Me for my dumb thoughts, speaking in effect."
  },
  {
    "id": 86,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Was it the proud full sail of his great verse,\nBound for the prize of all too precious you,\nThat did my ripe thoughts in my brain inhearse,\nMaking their tomb the womb wherein they grew?\nWas it his spirit, by spirits taught to write,\nAbove a mortal pitch, that struck me dead?\nNo, neither he, nor his compeers by night\nGiving him aid, my verse astonished.\nHe, nor that affable familiar ghost\nWhich nightly gulls him with intelligence,\nAs victors of my silence cannot boast;\nI was not sick of any fear from thence:\n  But when your countenance fill'd up his line,\n  Then lacked I matter; that enfeebled mine."
  },
  {
    "id": 87,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Farewell! thou art too dear for my possessing,\nAnd like enough thou know'st thy estimate,\nThe charter of thy worth gives thee releasing;\nMy bonds in thee are all determinate.\nFor how do I hold thee but by thy granting?\nAnd for that riches where is my deserving?\nThe cause of this fair gift in me is wanting,\nAnd so my patent back again is swerving.\nThy self thou gav'st, thy own worth then not knowing,\nOr me to whom thou gav'st it, else mistaking;\nSo thy great gift, upon misprision growing,\nComes home again, on better judgement making.\n  Thus have I had thee, as a dream doth flatter,\n  In sleep a king, but waking no such matter."
  },
  {
    "id": 88,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "When thou shalt be dispos'd to set me light,\nAnd place my merit in the eye of scorn,\nUpon thy side, against myself I'll fight,\nAnd prove thee virtuous, though thou art forsworn.\nWith mine own weakness, being best acquainted,\nUpon thy part I can set down a story\nOf faults conceal'd, wherein I am attainted;\nThat thou in losing me shalt win much glory:\nAnd I by this will be a gainer too;\nFor bending all my loving thoughts on thee,\nThe injuries that to myself I do,\nDoing thee vantage, double-vantage me.\n  Such is my love, to thee I so belong,\n  That for thy right, myself will bear all wrong."
  },
  {
    "id": 89,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto LXXXIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Say that thou didst forsake me for some fault,\nAnd I will comment upon that offence:\nSpeak of my lameness, and I straight will halt,\nAgainst thy reasons making no defence.\nThou canst not love disgrace me half so ill,\nTo set a form upon desired change,\nAs I'll myself disgrace; knowing thy will,\nI will acquaintance strangle, and look strange;\nBe absent from thy walks; and in my tongue\nThy sweet beloved name no more shall dwell,\nLest I, too much profane, should do it wrong,\nAnd haply of our old acquaintance tell.\n  For thee, against my self I'll vow debate,\n  For I must ne'er love him whom thou dost hate."
  },
  {
    "id": 90,
    "chapter": 9,
    "chapterTitle": "El amor que permanece",
    "title": "Soneto XC",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Then hate me when thou wilt; if ever, now;\nNow, while the world is bent my deeds to cross,\nJoin with the spite of fortune, make me bow,\nAnd do not drop in for an after-loss:\nAh! do not, when my heart hath 'scap'd this sorrow,\nCome in the rearward of a conquer'd woe;\nGive not a windy night a rainy morrow,\nTo linger out a purpos'd overthrow.\nIf thou wilt leave me, do not leave me last,\nWhen other petty griefs have done their spite,\nBut in the onset come: so shall I taste\nAt first the very worst of fortune's might;\n  And other strains of woe, which now seem woe,\n  Compar'd with loss of thee, will not seem so."
  },
  {
    "id": 91,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Some glory in their birth, some in their skill,\nSome in their wealth, some in their body's force,\nSome in their garments though new-fangled ill;\nSome in their hawks and hounds, some in their horse;\nAnd every humour hath his adjunct pleasure,\nWherein it finds a joy above the rest:\nBut these particulars are not my measure,\nAll these I better in one general best.\nThy love is better than high birth to me,\nRicher than wealth, prouder than garments' costs,\nOf more delight than hawks and horses be;\nAnd having thee, of all men's pride I boast:\n  Wretched in this alone, that thou mayst take\n  All this away, and me most wretchcd make."
  },
  {
    "id": 92,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "But do thy worst to steal thyself away,\nFor term of life thou art assured mine;\nAnd life no longer than thy love will stay,\nFor it depends upon that love of thine.\nThen need I not to fear the worst of wrongs,\nWhen in the least of them my life hath end.\nI see a better state to me belongs\nThan that which on thy humour doth depend:\nThou canst not vex me with inconstant mind,\nSince that my life on thy revolt doth lie.\nO! what a happy title do I find,\nHappy to have thy love, happy to die!\n  But what's so blessed-fair that fears no blot?\n  Thou mayst be false, and yet I know it not."
  },
  {
    "id": 93,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "So shall I live, supposing thou art true,\nLike a deceived husband; so love's face\nMay still seem love to me, though alter'd new;\nThy looks with me, thy heart in other place:\nFor there can live no hatred in thine eye,\nTherefore in that I cannot know thy change.\nIn many's looks, the false heart's history\nIs writ in moods, and frowns, and wrinkles strange.\nBut heaven in thy creation did decree\nThat in thy face sweet love should ever dwell;\nWhate'er thy thoughts, or thy heart's workings be,\nThy looks should nothing thence, but sweetness tell.\n  How like Eve's apple doth thy beauty grow,\n  If thy sweet virtue answer not thy show!"
  },
  {
    "id": 94,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCIV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "They that have power to hurt, and will do none,\nThat do not do the thing they most do show,\nWho, moving others, are themselves as stone,\nUnmoved, cold, and to temptation slow;\nThey rightly do inherit heaven's graces,\nAnd husband nature's riches from expense;\nThey are the lords and owners of their faces,\nOthers, but stewards of their excellence.\nThe summer's flower is to the summer sweet,\nThough to itself, it only live and die,\nBut if that flower with base infection meet,\nThe basest weed outbraves his dignity:\n  For sweetest things turn sourest by their deeds;\n  Lilies that fester, smell far worse than weeds."
  },
  {
    "id": 95,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCV",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "How sweet and lovely dost thou make the shame\nWhich, like a canker in the fragrant rose,\nDoth spot the beauty of thy budding name!\nO! in what sweets dost thou thy sins enclose.\nThat tongue that tells the story of thy days,\nMaking lascivious comments on thy sport,\nCannot dispraise, but in a kind of praise;\nNaming thy name, blesses an ill report.\nO! what a mansion have those vices got\nWhich for their habitation chose out thee,\nWhere beauty's veil doth cover every blot\nAnd all things turns to fair that eyes can see!\n  Take heed, dear heart, of this large privilege;\n  The hardest knife ill-us'd doth lose his edge."
  },
  {
    "id": 96,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCVI",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Some say thy fault is youth, some wantonness;\nSome say thy grace is youth and gentle sport;\nBoth grace and faults are lov'd of more and less:\nThou mak'st faults graces that to thee resort.\nAs on the finger of a throned queen\nThe basest jewel will be well esteem'd,\nSo are those errors that in thee are seen\nTo truths translated, and for true things deem'd.\nHow many lambs might the stern wolf betray,\nIf like a lamb he could his looks translate!\nHow many gazers mightst thou lead away,\nif thou wouldst use the strength of all thy state!\n  But do not so; I love thee in such sort,\n  As, thou being mine, mine is thy good report."
  },
  {
    "id": 97,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCVII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "How like a winter hath my absence been\nFrom thee, the pleasure of the fleeting year!\nWhat freezings have I felt, what dark days seen!\nWhat old December's bareness everywhere!\nAnd yet this time removed was summer's time;\nThe teeming autumn, big with rich increase,\nBearing the wanton burden of the prime,\nLike widow'd wombs after their lords' decease:\nYet this abundant issue seem'd to me\nBut hope of orphans, and unfather'd fruit;\nFor summer and his pleasures wait on thee,\nAnd, thou away, the very birds are mute:\n  Or, if they sing, 'tis with so dull a cheer,\n  That leaves look pale, dreading the winter's near."
  },
  {
    "id": 98,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCVIII",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "From you have I been absent in the spring,\nWhen proud-pied April, dress'd in all his trim,\nHath put a spirit of youth in every thing,\nThat heavy Saturn laugh'd and leap'd with him.\nYet nor the lays of birds, nor the sweet smell\nOf different flowers in odour and in hue,\nCould make me any summer's story tell,\nOr from their proud lap pluck them where they grew:\nNor did I wonder at the lily's white,\nNor praise the deep vermilion in the rose;\nThey were but sweet, but figures of delight,\nDrawn after you, you pattern of all those.\n  Yet seem'd it winter still, and you away,\n  As with your shadow I with these did play."
  },
  {
    "id": 99,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto XCIX",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "The forward violet thus did I chide:\nSweet thief, whence didst thou steal thy sweet that smells,\nIf not from my love's breath? The purple pride\nWhich on thy soft cheek for complexion dwells\nIn my love's veins thou hast too grossly dy'd.\nThe lily I condemned for thy hand,\nAnd buds of marjoram had stol'n thy hair;\nThe roses fearfully on thorns did stand,\nOne blushing shame, another white despair;\nA third, nor red nor white, had stol'n of both,\nAnd to his robbery had annex'd thy breath;\nBut, for his theft, in pride of all his growth\nA vengeful canker eat him up to death.\n  More flowers I noted, yet I none could see,\n  But sweet, or colour it had stol'n from thee."
  },
  {
    "id": 100,
    "chapter": 10,
    "chapterTitle": "Todas las páginas que todavía nos quedan",
    "title": "Soneto C",
    "author": "William Shakespeare",
    "language": "English · original",
    "source": "https://www.gutenberg.org/ebooks/1041",
    "text": "Where art thou Muse that thou forget'st so long,\nTo speak of that which gives thee all thy might?\nSpend'st thou thy fury on some worthless song,\nDarkening thy power to lend base subjects light?\nReturn forgetful Muse, and straight redeem,\nIn gentle numbers time so idly spent;\nSing to the ear that doth thy lays esteem\nAnd gives thy pen both skill and argument.\nRise, resty Muse, my love's sweet face survey,\nIf Time have any wrinkle graven there;\nIf any, be a satire to decay,\nAnd make time's spoils despised every where.\n  Give my love fame faster than Time wastes life,\n  So thou prevent'st his scythe and crooked knife."
  }
];


