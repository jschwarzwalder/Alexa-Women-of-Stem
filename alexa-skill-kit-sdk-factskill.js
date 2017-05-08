/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 1011010101;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                "Émilie du Châtelet born 1706 in Paris France was a French natural philosopher, mathematician, physicist, and author during the early 1730s. Her most recognized achievement is her translation of and commentary on Isaac Newton's book Principia containing basic laws of physics.",
                "Ada Lovelace born 1815 in London, was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine.",
                "Ada Yonath, born 1939 in Jerusalem, Palestine is an Israeli crystallographer best known for her pioneering work on the structure of the ribosome",
                "Adele Goldberg, born 1945 in Cleveland Ohio, is a computer scientist who participated in developing programming language Smalltalk-80 and various concepts related to object-oriented programming while a researcher at the Xerox Palo Alto Research Center (PARC), in the 1970s.",
                "Adriana Gascoigne of San Francisco is an American technology executive and activist, the founder and Chief Executive Officer of Girls in Tech, a global non-profit dedicated to empowering, educating, and mentoring women in the technology industry.",
                "Adriana Ocampo, born 1955 in Barranquilla, Columbia, is a Colombian planetary geologist and the Science Program Manager at NASA Headquarters. Her research led to the discovery of the Chicxulub impact crater.",
                "Alice Ball, born 1892 in Seattle Washington, was an African American chemist who developed an injectable oil extract that was the most effective treatment for leprosy until the 1940s. She was also the first woman and first African American to graduate from the University of Hawaii with a master's degree.",
                "Amanda Stiles, of California, earned a masters in space management from the International Space Univerisity located in France. She has trained several astronauts from NASA and shared her talents with SpaceX. ",
                "Angella D. Ferguson, born 1925 in Washington D.C., is an African American pediatrician known for her groundbreaking research on sickle cell disease.",
                "Ann M. Graybiel, born 1942, is an expert on the basal ganglia and the neurophysiology of habit formation. Her work is relevant to Parkinson's disease, Huntington's disease, obsessive–compulsive disorder, substance abuse and other disorders that affect the basal ganglia. ",
                "Anne Wojcicki, born 1973 in San Mateo County California, is an American entrepreneur and the co-founder and chief executive officer of the personal genomics company 23andMe.",
                "Annie J. Easley, born 1933 in Birmingham, Alabama, was an African-American computer scientist, mathematician, and rocket scientist.[1] She worked for the Lewis Research Center (now Glenn Research Center) of the National Aeronautics and Space Administration (NASA) and its predecessor, the National Advisory Committee for Aeronautics (NACA). She was a leading member of the team which developed software for the Centaur rocket stage and one of the first African-Americans to work as a computer scientist at NASA. ",
                "Anousheh Ansari, born 1966 in Mashhad Iran is an Iranian-American engineer and co-founder and chairwoman of Prodea Systems. She is the first Iranian in space, and first self-funded woman to fly to the International Space Station. ",
                "Antonia Coello Novello, born 1944 Fajardo, Puerto Rico, is a physician and public health administrator. She served as the first woman and first Hispanic Surgeon General of the United States. ",
                "Aprille Ericsson, born 1963 in Brooklyn New York is the first female (and the first African-American female) to receive a Ph.D. in mechanical engineering from Howard University and the first African-American female to receive a Ph.D. in engineering at the NASA Goddard Space Flight Center.",
                "Barbara McClintock, born 1902 in Hartford Connetticut, was an American scientist and cytogeneticist who was awarded the 1983 Nobel Prize in Physiology or Medicine for the discovery of genetic transposition that demonstrated genes are responsible for turning physical characteristics on and off.",
                "Bessie Coleman, born 1892 in Atlanta, Texas, was an American civil aviator. She was the first woman of African American descent, and the first of Native American descent, to hold a pilot license.",
                "Brenda Milner, born 1918 in Manchester England,  is a Canadian neuropsychologist who has contributed extensively to the research literature on various topics in the field of clinical neuropsychology, sometimes referred to as the founder of neuropsychology. Her current work explores the interaction between the brain’s left and right hemispheres.",
                "Carol Greider, born 1961 in San Diego, California,  is an American molecular biologist. Greider pioneered research on the structure of telomeres, the ends of the chromosomes. She was awarded the 2009 Nobel Prize for Physiology or Medicine, along with Elizabeth Blackburn and Jack W. Szostak, for their discovery that telomeres are protected from progressive shortening by the enzyme telomerase.",
                "Caterina Fake , born 1969 in Pittsburgh, Pennsylvania)is an American entrepreneur and businesswoman. She founded the websites Flickr.",
                "Chien-Shiung Wu, born 1912 in Liuhe, Taicang, Jiangsu, China, was a Chinese-American experimental physicist who made significant contributions in the field of nuclear physics. Wu worked on the Manhattan Project, where she helped develop the process for separating uranium metal into uranium-235 and uranium-238 isotopes by gaseous diffusion. ",
                "Christiane Nusslein-Volhard, born 1942 in Magdeburg Germany, is a German developmental biologist and 1995 Nobel Prize-winner for research on the genetic control of embryonic development.",
                "Cori Bargmann, born 1961 in Virgina, is an American neurobiologist. By studiying the behaviour of roundworms, she uncovered how neurons and genes affect behavior.",
                "Daphne Koller, born 1968 in Israel, is an Israeli-American Professor in the Department of Computer Science at Stanford University and a MacArthur Fellowship recipient. She is also one of the founders of Coursera, an online education platform. Her general research area is artificial intelligence and its applications in the biomedical sciences.",
                "Dorothy Crowfoot Hodgkin, born 1910 in Cairo Egypt,  was a British chemist who developed protein crystallography, for which she won the Nobel Prize in Chemistry in 1964.She advanced the technique of X-ray crystallography, a method used to determine the three-dimensional structures of biomolecules. Among her most influential discoveries are the confirmation of the structure of penicillin, and the structure of vitamin B12.",
                "Dorothy Vaughan born 1910 in Kansas City Missouri, was an African American mathematician and human computer who worked for the National Advisory Committee for Aeronautics (NACA), and NASA, at Langley Research Center in Hampton, Virginia. In 1949, she became acting supervisor of the West Area Computers, the first African-American woman to supervise a staff at the center.",
                "Edith Clarke born 1883 in Howard County Maryland, was the first female electrical engineer and the first female professor of electrical engineering. ",
                "Elaine Fuchs born 1950 of Hinsdale Illinois,  is an American cell biologist, famous for her work on the biology and molecular mechanisms of mammalian skin and skin diseases, and has led the modernization of dermatology. ",
                "Elaine R. Mardis born 1962 of St. Louis, Missouri is an American Professor of Genetics. Dr. Mardis also helped lead the group that sequenced the first whole cancer genomeand has since gone on to sequence many other cancer genomes to determine the genetic changes that may lead to cancer.",
                "Eleanor Francis Helin, born 1932 in Pasadena California, was American astronomer who was principal investigator of Near-Earth Asteroid Tracking (NEAT) program of NASA's Jet Propulsion Laboratory. She is a prolific discoverer of minor planets and also discovered several comets.",
                "Elisabeth Pate-Cornell born 1948 in Dakar, Senegal, is an expert in engineering risk analysis and management. Her reseach has been influenced NASA, offshore oil platforms and medical systems.",
                "Elizabeth H. Blackburn, born 1948 in Hobart, Australia,  is an Australian-American Nobel laureate and biological researcher who studied the telomere, a structure at the end of chromosomes that protects the chromosome. She co-discovered telomerase, the enzyme that replenishes the telomere.",
                "Ellen Ochoa born 1958 in Los Angelese, California is an American engineer, former astronaut, director of the Johnson Space Center and the first Hispanic woman in the world to go to space.",
                "Elsie MacGill born 1905 in Vancouver, British Columbia, Canada  known as the Queen of the Hurricanes, was the world's first woman to earn an aeronautical engineering degree. She worked as an aeronautical engineer during the Second World War and did much to make Canada a powerhouse of aircraft construction.",
                "Emmy Noether born 1882 in Erlangen, Bavaria, German Empire was a German mathematician known for her landmark contributions to abstract algebra and theoretical physics.",
                "Esther Lederberg born 1922 in Bronx New York was an American microbiologist and a pioneer of bacterial genetics",
                "Esther Takeuchi born 1953 in Kansas City, Missouri is a materials scientist and chemical engineer, working on energy storage systems and power sources for biomedical devices. She holds more than 145 U.S. patents.",
                "Evelyn Berezin born 1925 in New York City,is an American computer designer best known for designing the first computer-driven word processor. She was also responsible for the first computer-controlled systems for airline reservations.",
                "Evelyn Boyd-Granville born 1924 in Washington D. C. was a mathematician, computer programer, and professor. She was the second African-American woman to receive a Ph.D. in mathematics from an American University. While at the U.S. Space Technlogy Laboratory, worked on various projects for the Apollo program, including celestial mechanics, trajectory comuptation, and digital computer techniques.",
                "Farida Bedwei born 1979 in Lagos Nigeria, is a Ghanaian software engineer. She has also created the gKudi micro-finance platform, a clouded banking system that allows small scale loans within Ghana.",
                "Florence Nightinggale born 1820 in Florence, Tuscany, was an English social reformer and statistician, and the founder of modern nursing.",
                "Francoise Barre Sinoussi born 1947 in Paris France, is a French virologist. She performed some of the fundamental work in the identification of the human immunodeficiency virus (HIV) as the cause of AIDS. For her work, she was awarded Nobel Prize in Physiology or Medicine.",
                "Gertrude B. Elion born 1918 in New York City, NY was an American biochemist and pharmacologist. Elion developed a multitude of new drugs, using innovative research methods that would later lead to the development of the AIDS drug AZT. She developed the first immunosuppressive drug, azathioprine, used for organ transplants for which she won the Nobel Prize in Physiology or Medicine.",
                "Grace Hopper born 1906 in New York City, was an American computer scientist and United States Navy rear admiral. In 1944, she was one of the first programmers of the Harvard Mark I computer [2] and invented the first compiler for a computer programming language.",
                "Hayat Sindi born 1991 Mecca Saudia Arabia, is a Saudi Arabian medical scientist and one of the first female members of the Consultative Assembly of Saudi Arabia.[1] She is famous for making major contributions to point-of-care medical testing and biotechnology.",
                "Hedy Lamarr born 1914 in Vienna, Austria-Hungary was an Austrian and American film actress and inventor. At the beginning of World War II, Lamarr and composer George Antheil developed a radio guidance system for Allied torpedoes, which used spread spectrum and frequency hopping technology to defeat the threat of jamming by the Axis powers.",
                "Helen Greiner born 1967 in London, is a co-founder of iRobot the company that released the Roomba and currently CTO of CyPhyWorks, a start-up company specializing in small multi-rotor drones for the consumer, commercial and military markets.",
                "Helen Rodriguez-Trias born 1929 in New York City, was a pediatrician, educator and women rights activist. She was the first Latina president of the American Public Health Association and a founding member of the Women's Caucus of the American Public Health Association. She is credited with helping to expand the range of public health services for women and children in minority and low-income populations in the United States, Central and South America, Africa, Asia, and the Middle East",
                "Huda Y. Zoghbi born 1955 in Beirut, Lebanon is a Lebanese-born physician and medical researcher. Her work has elucidated mechanisms of Rett syndrome and spinocerebellar ataxias.",
                "Hypatia born circa 355 in Alexandria Egypt was a Greek mathematician, astronomer, and philosopher in Egypt, then a part of the Eastern Roman Empire. She was the head of the Neoplatonic school at Alexandria, where she taught philosophy and astronomy.",
                "Ingrid Daubechies born 1954 in Houthalen-Helchteren, Belgium is a Belgian physicist and mathematician. She is best known for her work with wavelets in image compression.",
                "Irene Joliot-Curie born 1897 in Paris, France  was a French scientist, the daughter of Marie Curie, who specialied in chemical engineering. . She awarded the Nobel Prize for Chemistry in 1935 for their discovery of artificial radioactivity. ",
                "Jane Goodall born 1934 in London United Kingdom is a British primatologist, ethologist, anthropologist, and UN Messenger of Peace. Considered to be the world's foremost expert on chimpanzees, Goodall is best known for her 55-year study of social and family interactions of wild chimpanzees in Gombe Stream National Park, Tanzania.",
                "Jane Lubchenco born 1947 in Denver Colorado is   Ukrainian-American environmental scientist and marine ecologist. She was the first woman Administrator of National Oceanic and Atmospheric Administration (NOAA). ",
                "Janet Davison Rowley born 1925 in New York City New York was an American human geneticist and the first scientist to identify a chromosomal translocation as the cause of leukemia and other cancers.",
                "Jedidah Isler of Virgina Beach Virgina is an astrophysicist and STEM advocate, and the first African-American woman to receive a Ph.D. in Astrophysics from Yale University. She has written award-winning studies on blazars and examines the jet streams emanating from them.",
                "Jennifer Doudna born 1964 in Washington D.C., is a biochmist and leading figure in genome editing.",
                "Jill Tarter born 1944 in New York, is an American astronomer and the former director of the Center for SETI Research",
                "Jo Handelsman born 1959 in New York City New York is a scientist whose research involves the study of microorganisms present in soil and insect gut. She is responsible for coining the term metagenomics and is particularly known for her work in pioneering the use of functional metagenomics to study antibiotic resistance",
                "Joan A. Steitz born 1941 in Minneapolis, Minnesota is a Professor of Molecular Biophysics and Biochemistry known for her discoveries involving RNA, including ground-breaking insights into how ribosomes interact with messenger RNA by complementary base pairing and that introns are spliced by small nuclear ribonucleic proteins (snRNPs), which occur in eukaryotes.",
                "Joanne Martin born 1947 served on management team that developed and delivered IBM's first supercomputer.",
                "Jocelyn Bell Burnell born 1943 in Lurgan, County Armagh, Northern Ireland, is a Northern Irish astrophysicist. As a postgraduate student, she discovered the first four radio pulsars.",
                "Katherine Johnson, born 1918 in White Sulphur Springs, West Virginia, is an African-American physicist and mathematician who made contributions to the United States' aeronautics and space programs with the early application of digital electronic computers at NASA. Known for accuracy in computerized celestial navigation, she conducted technical work at NASA that spanned decades. During this time, she calculated the trajectories, launch windows, and emergency back-up return paths for many flights from Project Mercury, including the early NASA missions of John Glenn and Alan Shepard, and the 1969 Apollo 11 flight to the Moon, through the Space Shuttle program.",
                "Kimberly Bryant of Memphis Tennessee  is an African American electrical engineer who worked in the biotechnology field and founded Black Girls Code.",
                "Ruzena Bajcsy born 1933 Bratislava, Slovakia is an American computer scientist who specializes in robotics. Her current research centers on artificial intelligence; biosystems and computational biology; control, intelligent systems, and robotics; graphics and human-computer interaction, computer vision; and security.",
            ],
            SKILL_NAME: 'Women of Stem',
            GET_FACT_MESSAGE: "",
            HELP_MESSAGE: 'You can say tell me about a women of stem, or, you can say exit... How can I be of further assistance?',
            HELP_REPROMPT: 'How can I help you?',
            STOP_MESSAGE: 'Thank you. Have a nice day!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                "Émilie du Châtelet born 1706 in Paris France was a French natural philosopher, mathematician, physicist, and author during the early 1730s. Her most recognized achievement is her translation of and commentary on Isaac Newton's book Principia containing basic laws of physics.",
                "Ada Lovelace born 1815 in London, was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine.",
                "Ada Yonath, born 1939 in Jerusalem, Palestine is an Israeli crystallographer best known for her pioneering work on the structure of the ribosome",
                "Adele Goldberg, born 1945 in Cleveland Ohio, is a computer scientist who participated in developing programming language Smalltalk-80 and various concepts related to object-oriented programming while a researcher at the Xerox Palo Alto Research Center (PARC), in the 1970s.",
                "Adriana Gascoigne of San Francisco is an American technology executive and activist, the founder and Chief Executive Officer of Girls in Tech, a global non-profit dedicated to empowering, educating, and mentoring women in the technology industry.",
                "Adriana Ocampo, born 1955 in Barranquilla, Columbia, is a Colombian planetary geologist and the Science Program Manager at NASA Headquarters. Her research led to the discovery of the Chicxulub impact crater.",
                "Alice Ball, born 1892 in Seattle Washington, was an African American chemist who developed an injectable oil extract that was the most effective treatment for leprosy until the 1940s. She was also the first woman and first African American to graduate from the University of Hawaii with a master's degree.",
                "Amanda Stiles, of California, earned a masters in space management from the International Space Univerisity located in France. She has trained several astronauts from NASA and shared her talents with SpaceX. ",
                "Angella D. Ferguson, born 1925 in Washington D.C., is an African American pediatrician known for her groundbreaking research on sickle cell disease.",
                "Ann M. Graybiel, born 1942, is an expert on the basal ganglia and the neurophysiology of habit formation. Her work is relevant to Parkinson's disease, Huntington's disease, obsessive–compulsive disorder, substance abuse and other disorders that affect the basal ganglia. ",
                "Anne Wojcicki, born 1973 in San Mateo County California, is an American entrepreneur and the co-founder and chief executive officer of the personal genomics company 23andMe.",
                "Annie J. Easley, born 1933 in Birmingham, Alabama, was an African-American computer scientist, mathematician, and rocket scientist.[1] She worked for the Lewis Research Center (now Glenn Research Center) of the National Aeronautics and Space Administration (NASA) and its predecessor, the National Advisory Committee for Aeronautics (NACA). She was a leading member of the team which developed software for the Centaur rocket stage and one of the first African-Americans to work as a computer scientist at NASA. ",
                "Anousheh Ansari, born 1966 in Mashhad Iran is an Iranian-American engineer and co-founder and chairwoman of Prodea Systems. She is the first Iranian in space, and first self-funded woman to fly to the International Space Station. ",
                "Antonia Coello Novello, born 1944 Fajardo, Puerto Rico, is a physician and public health administrator. She served as the first woman and first Hispanic Surgeon General of the United States. ",
                "Aprille Ericsson, born 1963 in Brooklyn New York is the first female (and the first African-American female) to receive a Ph.D. in mechanical engineering from Howard University and the first African-American female to receive a Ph.D. in engineering at the NASA Goddard Space Flight Center.",
                "Barbara McClintock, born 1902 in Hartford Connetticut, was an American scientist and cytogeneticist who was awarded the 1983 Nobel Prize in Physiology or Medicine for the discovery of genetic transposition that demonstrated genes are responsible for turning physical characteristics on and off.",
                "Bessie Coleman, born 1892 in Atlanta, Texas, was an American civil aviator. She was the first woman of African American descent, and the first of Native American descent, to hold a pilot license.",
                "Brenda Milner, born 1918 in Manchester England,  is a Canadian neuropsychologist who has contributed extensively to the research literature on various topics in the field of clinical neuropsychology, sometimes referred to as the founder of neuropsychology. Her current work explores the interaction between the brain’s left and right hemispheres.",
                "Carol Greider, born 1961 in San Diego, California,  is an American molecular biologist. Greider pioneered research on the structure of telomeres, the ends of the chromosomes. She was awarded the 2009 Nobel Prize for Physiology or Medicine, along with Elizabeth Blackburn and Jack W. Szostak, for their discovery that telomeres are protected from progressive shortening by the enzyme telomerase.",
                "Caterina Fake , born 1969 in Pittsburgh, Pennsylvania)is an American entrepreneur and businesswoman. She founded the websites Flickr.",
                "Chien-Shiung Wu, born 1912 in Liuhe, Taicang, Jiangsu, China, was a Chinese-American experimental physicist who made significant contributions in the field of nuclear physics. Wu worked on the Manhattan Project, where she helped develop the process for separating uranium metal into uranium-235 and uranium-238 isotopes by gaseous diffusion. ",
                "Christiane Nusslein-Volhard, born 1942 in Magdeburg Germany, is a German developmental biologist and 1995 Nobel Prize-winner for research on the genetic control of embryonic development.",
                "Cori Bargmann, born 1961 in Virgina, is an American neurobiologist. By studiying the behaviour of roundworms, she uncovered how neurons and genes affect behavior.",
                "Daphne Koller, born 1968 in Israel, is an Israeli-American Professor in the Department of Computer Science at Stanford University and a MacArthur Fellowship recipient. She is also one of the founders of Coursera, an online education platform. Her general research area is artificial intelligence and its applications in the biomedical sciences.",
                "Dorothy Crowfoot Hodgkin, born 1910 in Cairo Egypt,  was a British chemist who developed protein crystallography, for which she won the Nobel Prize in Chemistry in 1964.She advanced the technique of X-ray crystallography, a method used to determine the three-dimensional structures of biomolecules. Among her most influential discoveries are the confirmation of the structure of penicillin, and the structure of vitamin B12.",
                "Dorothy Vaughan born 1910 in Kansas City Missouri, was an African American mathematician and human computer who worked for the National Advisory Committee for Aeronautics (NACA), and NASA, at Langley Research Center in Hampton, Virginia. In 1949, she became acting supervisor of the West Area Computers, the first African-American woman to supervise a staff at the center.",
                "Edith Clarke born 1883 in Howard County Maryland, was the first female electrical engineer and the first female professor of electrical engineering. ",
                "Elaine Fuchs born 1950 of Hinsdale Illinois,  is an American cell biologist, famous for her work on the biology and molecular mechanisms of mammalian skin and skin diseases, and has led the modernization of dermatology. ",
                "Elaine R. Mardis born 1962 of St. Louis, Missouri is an American Professor of Genetics. Dr. Mardis also helped lead the group that sequenced the first whole cancer genomeand has since gone on to sequence many other cancer genomes to determine the genetic changes that may lead to cancer.",
                "Eleanor Francis Helin, born 1932 in Pasadena California, was American astronomer who was principal investigator of Near-Earth Asteroid Tracking (NEAT) program of NASA's Jet Propulsion Laboratory. She is a prolific discoverer of minor planets and also discovered several comets.",
                "Elisabeth Pate-Cornell born 1948 in Dakar, Senegal, is an expert in engineering risk analysis and management. Her reseach has been influenced NASA, offshore oil platforms and medical systems.",
                "Elizabeth H. Blackburn, born 1948 in Hobart, Australia,  is an Australian-American Nobel laureate and biological researcher who studied the telomere, a structure at the end of chromosomes that protects the chromosome. She co-discovered telomerase, the enzyme that replenishes the telomere.",
                "Ellen Ochoa born 1958 in Los Angelese, California is an American engineer, former astronaut, director of the Johnson Space Center and the first Hispanic woman in the world to go to space.",
                "Elsie MacGill born 1905 in Vancouver, British Columbia, Canada  known as the Queen of the Hurricanes, was the world's first woman to earn an aeronautical engineering degree. She worked as an aeronautical engineer during the Second World War and did much to make Canada a powerhouse of aircraft construction.",
                "Emmy Noether born 1882 in Erlangen, Bavaria, German Empire was a German mathematician known for her landmark contributions to abstract algebra and theoretical physics.",
                "Esther Lederberg born 1922 in Bronx New York was an American microbiologist and a pioneer of bacterial genetics",
                "Esther Takeuchi born 1953 in Kansas City, Missouri is a materials scientist and chemical engineer, working on energy storage systems and power sources for biomedical devices. She holds more than 145 U.S. patents.",
                "Evelyn Berezin born 1925 in New York City,is an American computer designer best known for designing the first computer-driven word processor. She was also responsible for the first computer-controlled systems for airline reservations.",
                "Evelyn Boyd-Granville born 1924 in Washington D. C. was a mathematician, computer programer, and professor. She was the second African-American woman to receive a Ph.D. in mathematics from an American University. While at the U.S. Space Technlogy Laboratory, worked on various projects for the Apollo program, including celestial mechanics, trajectory comuptation, and digital computer techniques.",
                "Farida Bedwei born 1979 in Lagos Nigeria, is a Ghanaian software engineer. She has also created the gKudi micro-finance platform, a clouded banking system that allows small scale loans within Ghana.",
                "Florence Nightinggale born 1820 in Florence, Tuscany, was an English social reformer and statistician, and the founder of modern nursing.",
                "Francoise Barre Sinoussi born 1947 in Paris France, is a French virologist. She performed some of the fundamental work in the identification of the human immunodeficiency virus (HIV) as the cause of AIDS. For her work, she was awarded Nobel Prize in Physiology or Medicine.",
                "Gertrude B. Elion born 1918 in New York City, NY was an American biochemist and pharmacologist. Elion developed a multitude of new drugs, using innovative research methods that would later lead to the development of the AIDS drug AZT. She developed the first immunosuppressive drug, azathioprine, used for organ transplants for which she won the Nobel Prize in Physiology or Medicine.",
                "Grace Hopper born 1906 in New York City, was an American computer scientist and United States Navy rear admiral. In 1944, she was one of the first programmers of the Harvard Mark I computer [2] and invented the first compiler for a computer programming language.",
                "Hayat Sindi born 1991 Mecca Saudia Arabia, is a Saudi Arabian medical scientist and one of the first female members of the Consultative Assembly of Saudi Arabia.[1] She is famous for making major contributions to point-of-care medical testing and biotechnology.",
                "Hedy Lamarr born 1914 in Vienna, Austria-Hungary was an Austrian and American film actress and inventor. At the beginning of World War II, Lamarr and composer George Antheil developed a radio guidance system for Allied torpedoes, which used spread spectrum and frequency hopping technology to defeat the threat of jamming by the Axis powers.",
                "Helen Greiner born 1967 in London, is a co-founder of iRobot the company that released the Roomba and currently CTO of CyPhyWorks, a start-up company specializing in small multi-rotor drones for the consumer, commercial and military markets.",
                "Helen Rodriguez-Trias born 1929 in New York City, was a pediatrician, educator and women rights activist. She was the first Latina president of the American Public Health Association and a founding member of the Women's Caucus of the American Public Health Association. She is credited with helping to expand the range of public health services for women and children in minority and low-income populations in the United States, Central and South America, Africa, Asia, and the Middle East",
                "Huda Y. Zoghbi born 1955 in Beirut, Lebanon is a Lebanese-born physician and medical researcher. Her work has elucidated mechanisms of Rett syndrome and spinocerebellar ataxias.",
                "Hypatia born circa 355 in Alexandria Egypt was a Greek mathematician, astronomer, and philosopher in Egypt, then a part of the Eastern Roman Empire. She was the head of the Neoplatonic school at Alexandria, where she taught philosophy and astronomy.",
                "Ingrid Daubechies born 1954 in Houthalen-Helchteren, Belgium is a Belgian physicist and mathematician. She is best known for her work with wavelets in image compression.",
                "Irene Joliot-Curie born 1897 in Paris, France  was a French scientist, the daughter of Marie Curie, who specialied in chemical engineering. . She awarded the Nobel Prize for Chemistry in 1935 for their discovery of artificial radioactivity. ",
                "Jane Goodall born 1934 in London United Kingdom is a British primatologist, ethologist, anthropologist, and UN Messenger of Peace. Considered to be the world's foremost expert on chimpanzees, Goodall is best known for her 55-year study of social and family interactions of wild chimpanzees in Gombe Stream National Park, Tanzania.",
                "Jane Lubchenco born 1947 in Denver Colorado is   Ukrainian-American environmental scientist and marine ecologist. She was the first woman Administrator of National Oceanic and Atmospheric Administration (NOAA). ",
                "Janet Davison Rowley born 1925 in New York City New York was an American human geneticist and the first scientist to identify a chromosomal translocation as the cause of leukemia and other cancers.",
                "Jedidah Isler of Virgina Beach Virgina is an astrophysicist and STEM advocate, and the first African-American woman to receive a Ph.D. in Astrophysics from Yale University. She has written award-winning studies on blazars and examines the jet streams emanating from them.",
                "Jennifer Doudna born 1964 in Washington D.C., is a biochmist and leading figure in genome editing.",
                "Jill Tarter born 1944 in New York, is an American astronomer and the former director of the Center for SETI Research",
                "Jo Handelsman born 1959 in New York City New York is a scientist whose research involves the study of microorganisms present in soil and insect gut. She is responsible for coining the term metagenomics and is particularly known for her work in pioneering the use of functional metagenomics to study antibiotic resistance",
                "Joan A. Steitz born 1941 in Minneapolis, Minnesota is a Professor of Molecular Biophysics and Biochemistry known for her discoveries involving RNA, including ground-breaking insights into how ribosomes interact with messenger RNA by complementary base pairing and that introns are spliced by small nuclear ribonucleic proteins (snRNPs), which occur in eukaryotes.",
                "Joanne Martin born 1947 served on management team that developed and delivered IBM's first supercomputer.",
                "Jocelyn Bell Burnell born 1943 in Lurgan, County Armagh, Northern Ireland, is a Northern Irish astrophysicist. As a postgraduate student, she discovered the first four radio pulsars.",
                "Katherine Johnson, born 1918 in White Sulphur Springs, West Virginia, is an African-American physicist and mathematician who made contributions to the United States' aeronautics and space programs with the early application of digital electronic computers at NASA. Known for accuracy in computerized celestial navigation, she conducted technical work at NASA that spanned decades. During this time, she calculated the trajectories, launch windows, and emergency back-up return paths for many flights from Project Mercury, including the early NASA missions of John Glenn and Alan Shepard, and the 1969 Apollo 11 flight to the Moon, through the Space Shuttle program.",
                "Kimberly Bryant of Memphis Tennessee  is an African American electrical engineer who worked in the biotechnology field and founded Black Girls Code.",
                "Ruzena Bajcsy born 1933 Bratislava, Slovakia is an American computer scientist who specializes in robotics. Her current research centers on artificial intelligence; biosystems and computational biology; control, intelligent systems, and robotics; graphics and human-computer interaction, computer vision; and security.",
            
            ],
            SKILL_NAME: 'Women of Stem',
            GET_FACT_MESSAGE: "",
            HELP_MESSAGE: 'You can say tell me about a woman in stem, or, you can say exit... How can I be of further assistance?',
            HELP_REPROMPT: 'How can I help you?',
            STOP_MESSAGE: 'Thank you. Have a nice day!',
        },
    },
    
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
