export const tpch19 = `const %0[90] ="\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000L\\000\\000\\000 \\000\\000\\000.\\000\\000\\000\\000\\000\\000\\000\\006\\000\\000\\000SM BOX\\000\\000\\000\\000\\007\\000\\000\\000SM CASE\\000\\000\\000\\000\\007\\000\\000\\000SM PACK=\\000\\000\\000\\006\\000\\000\\000SM PKG"

const %117[93] ="\\000\\000\\000\\000N\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000/\\000\\000\\000>\\000\\000\\000\\000\\000\\000\\000\\007\\000\\000\\000MED BAG \\000\\000\\000\\007\\000\\000\\000MED BOX\\000\\000\\000\\000\\010\\000\\000\\000MED PACK\\000\\000\\000\\000\\007\\000\\000\\000MED PKG"

const %238[90] ="L\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000=\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000.\\000\\000\\000 \\000\\000\\000\\000\\000\\000\\000\\006\\000\\000\\000LG BOX\\000\\000\\000\\000\\007\\000\\000\\000LG CASE\\000\\000\\000\\000\\007\\000\\000\\000LG PACK\\000\\000\\000\\000\\006\\000\\000\\000LG PKG"

const %356[42] ="\\000\\000\\000\\000\\020\\000\\000\\000\\000\\000\\000\\000\\033\\000\\000\\000\\000\\000\\000\\000\\003\\000\\000\\000AIR\\000\\000\\000\\000\\007\\000\\000\\000AIR REG"

const %1534[0] =""

const %1572[16] ="\\000\\000\\000\\000\\003\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000"

const %11543[72] ="\\015\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\031\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\/))U\\000\\000\\021\\000\\000\\000DELI\\000\\/).\\021\\0000\`\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %11654[24] ="\\001\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\015\\000\\000\\000\\016\\000\\000\\000"

const %13866[17] ="DELIVER IN PERSON"

define int32 @_12_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_2, i64 17)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 368
  %GroupByTranslator_cpp_269_ = call ptr _ZN5umbra17AggregationTarget19createExplicitGroupEm (%CompilationContext_cpp_214_3, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_269_, i64 16
  store data128 d128 {0,0}, %GroupByTranslator_cpp_269_
  store int8 i8 1, %MaterializationHelper_cpp_726_
  return 1
}

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %570)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %780, int32 %794)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %919, int64 %933)

declare int8* @_ZN5umbra17AggregationTarget19createExplicitGroupEm(object umbra::AggregationTarget* %1118, int64 %1132)

define int32 @_12_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %1534, i64 0, global %1572, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1679, int8* %1693, int64 %1707, object umbra::Relation::RestrictionInfo* %1721, int64 %1735, int32* %1749, int32 %1763)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %1849, int32 %1863, int32 %1877, int32 %1891, int32 %1905)

define int32 @_12_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %2073)

define int32 @_12_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2225)

define int32 @_12_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2357, int32 %2371)

define int32 @_12_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 112
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4456448
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Integer_cpp_89_ = cmpsle i32 1, %RelationMappedLogic_cpp_308_
  %Integer_cpp_89_6 = cmpsle i32 %RelationMappedLogic_cpp_308_, 5
  %Bool_cpp_117_ = and bool %Integer_cpp_89_, %Integer_cpp_89_6
  %RelationMappedLogic_cpp_303_7 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_7, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_8 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_9 = add i64 %RelationMappedLogic_cpp_320_8, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_10 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_9, %RelationMappedLogic_cpp_320_8
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_10
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 7953764044706414600
  condbr %Char_cpp_114_ %then %cont13

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_11 = cmpeq i64 %Char_cpp_115_, 842081124
  condbr %Char_cpp_115_11 %then12 %else

then12:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {7953764044706414600,842081124})
  br %cont

cont:
  %4492 = phi bool [bool true, %then12 %Char_cpp_118_, %else]
  br %cont13

cont13:
  %4535 = phi bool [%4492, %cont bool false, %loopTuples]
  %RelationMappedLogic_cpp_303_14 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4718592
  %RelationMappedLogic_cpp_319_15 = getelementptr data128 %RelationMappedLogic_cpp_303_14, %localTid
  %RelationMappedLogic_cpp_320_16 = load int64 %RelationMappedLogic_cpp_319_15
  %RelationMappedLogic_cpp_320_17 = load int64 %RelationMappedLogic_cpp_319_15, i32 1
  %RelationMappedLogic_cpp_321_18 = trunc i32 %RelationMappedLogic_cpp_320_16
  %RelationMappedLogic_cpp_322_19 = cmpult i32 12, %RelationMappedLogic_cpp_321_18
  %RelationMappedLogic_cpp_322_20 = add i64 %RelationMappedLogic_cpp_320_17, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_21 = select i64 %RelationMappedLogic_cpp_322_19, %RelationMappedLogic_cpp_322_20, %RelationMappedLogic_cpp_320_17
  %RelationMappedLogic_cpp_324_22 = builddata128 d128 %RelationMappedLogic_cpp_320_16 %RelationMappedLogic_cpp_322_21
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_22, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 61
  %InExpressionTranslator_cpp_145_23 = load int32 global %0, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_23, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_23, %cont13 %InExpressionTranslator_cpp_164_, %cont25]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %0, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Char_cpp_113_26 = extractdata128 i64 %RelationMappedLogic_cpp_324_22
  %Char_cpp_113_27 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_114_28 = cmpeq i64 %Char_cpp_113_26, %Char_cpp_113_27
  condbr %Char_cpp_114_28 %then29 %cont37

then29:
  %Char_cpp_115_30 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_115_31 = extractdata128 i64 %RelationMappedLogic_cpp_324_22
  %Char_cpp_115_32 = cmpeq i64 %Char_cpp_115_31, %Char_cpp_115_30
  condbr %Char_cpp_115_32 %then33 %else34

then33:
  br %cont36

else34:
  %Char_cpp_118_35 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_22, %MaterializationHelper_cpp_620_)
  br %cont36

cont36:
  %5962 = phi bool [bool true, %then33 %Char_cpp_118_35, %else34]
  br %cont37

cont37:
  %5998 = phi bool [%5962, %cont36 bool false, %loopInTable]
  %ConsumerContext_cpp_417_ = not bool %5998
  condbr %ConsumerContext_cpp_417_ %cont25 %else38

else38:
  br %in

cont25:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else38]
  %Bool_cpp_117_39 = and bool %Bool_cpp_117_, %4535
  %Bool_cpp_117_40 = and bool %Bool_cpp_117_39, %InExpressionTranslator_cpp_182_
  %Integer_cpp_89_41 = cmpsle i32 1, %RelationMappedLogic_cpp_308_
  %Integer_cpp_89_42 = cmpsle i32 %RelationMappedLogic_cpp_308_, 10
  %Bool_cpp_117_43 = and bool %Integer_cpp_89_41, %Integer_cpp_89_42
  %Char_cpp_113_44 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_45 = cmpeq i64 %Char_cpp_113_44, 7953764044706414600
  condbr %Char_cpp_114_45 %then46 %cont53

then46:
  %Char_cpp_115_47 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_48 = cmpeq i64 %Char_cpp_115_47, 858923876
  condbr %Char_cpp_115_48 %then49 %else50

then49:
  br %cont52

else50:
  %Char_cpp_118_51 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {7953764044706414600,858923876})
  br %cont52

cont52:
  %6687 = phi bool [bool true, %then49 %Char_cpp_118_51, %else50]
  br %cont53

cont53:
  %6723 = phi bool [%6687, %cont52 bool false, %in]
  %Hash_cpp_383_56 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_22, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_57 = lshr i64 %Hash_cpp_383_56, 61
  %InExpressionTranslator_cpp_145_58 = load int32 global %117, %InExpressionTranslator_cpp_145_57
  %InExpressionTranslator_cpp_147_59 = cmpne i32 %InExpressionTranslator_cpp_145_58, 0
  condbr %InExpressionTranslator_cpp_147_59 %loopInTable60 %loopDoneInTable61

loopInTable60:
  %entry62 = phi i32 [%InExpressionTranslator_cpp_145_58, %cont53 %InExpressionTranslator_cpp_164_86, %cont71]
  %CodeGen_cpp_1397_63 = zext i64 %entry62
  %InExpressionTranslator_cpp_149_64 = getelementptr int8 global %117, %CodeGen_cpp_1397_63
  %InExpressionTranslator_cpp_153_65 = getelementptr int8 %InExpressionTranslator_cpp_149_64, i64 4
  %MaterializationHelper_cpp_230_66 = load int32 %InExpressionTranslator_cpp_153_65
  %MaterializationHelper_cpp_233_67 = getelementptr int8 %InExpressionTranslator_cpp_153_65, i64 4
  %MaterializationHelper_cpp_620_68 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_67, %MaterializationHelper_cpp_230_66)
  %Char_cpp_113_72 = extractdata128 i64 %RelationMappedLogic_cpp_324_22
  %Char_cpp_113_73 = extractdata128 i64 %MaterializationHelper_cpp_620_68
  %Char_cpp_114_74 = cmpeq i64 %Char_cpp_113_72, %Char_cpp_113_73
  condbr %Char_cpp_114_74 %then75 %cont83

then75:
  %Char_cpp_115_76 = extractdata128 i64 %MaterializationHelper_cpp_620_68
  %Char_cpp_115_77 = extractdata128 i64 %RelationMappedLogic_cpp_324_22
  %Char_cpp_115_78 = cmpeq i64 %Char_cpp_115_77, %Char_cpp_115_76
  condbr %Char_cpp_115_78 %then79 %else80

then79:
  br %cont82

else80:
  %Char_cpp_118_81 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_22, %MaterializationHelper_cpp_620_68)
  br %cont82

cont82:
  %7641 = phi bool [bool true, %then79 %Char_cpp_118_81, %else80]
  br %cont83

cont83:
  %7677 = phi bool [%7641, %cont82 bool false, %loopInTable60]
  %ConsumerContext_cpp_417_84 = not bool %7677
  condbr %ConsumerContext_cpp_417_84 %cont71 %else85

else85:
  br %in55

cont71:
  %InExpressionTranslator_cpp_164_86 = load int32 %InExpressionTranslator_cpp_149_64
  %InExpressionTranslator_cpp_165_87 = cmpne i32 %InExpressionTranslator_cpp_164_86, 0
  condbr %InExpressionTranslator_cpp_165_87 %loopInTable60 %loopDoneInTable61

loopDoneInTable61:
  br %notFound54

notFound54:
  br %in55

in55:
  %InExpressionTranslator_cpp_182_88 = phi bool [bool false, %notFound54 bool true, %else85]
  %Bool_cpp_117_89 = and bool %Bool_cpp_117_43, %6723
  %Bool_cpp_117_90 = and bool %Bool_cpp_117_89, %InExpressionTranslator_cpp_182_88
  %Integer_cpp_89_91 = cmpsle i32 1, %RelationMappedLogic_cpp_308_
  %Integer_cpp_89_92 = cmpsle i32 %RelationMappedLogic_cpp_308_, 15
  %Bool_cpp_117_93 = and bool %Integer_cpp_89_91, %Integer_cpp_89_92
  %Char_cpp_113_94 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_95 = cmpeq i64 %Char_cpp_113_94, 7953764044706414600
  condbr %Char_cpp_114_95 %then96 %cont103

then96:
  %Char_cpp_115_97 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_98 = cmpeq i64 %Char_cpp_115_97, 875766628
  condbr %Char_cpp_115_98 %then99 %else100

then99:
  br %cont102

else100:
  %Char_cpp_118_101 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {7953764044706414600,875766628})
  br %cont102

cont102:
  %8375 = phi bool [bool true, %then99 %Char_cpp_118_101, %else100]
  br %cont103

cont103:
  %8411 = phi bool [%8375, %cont102 bool false, %in55]
  %Hash_cpp_383_106 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_22, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_107 = lshr i64 %Hash_cpp_383_106, 61
  %InExpressionTranslator_cpp_145_108 = load int32 global %238, %InExpressionTranslator_cpp_145_107
  %InExpressionTranslator_cpp_147_109 = cmpne i32 %InExpressionTranslator_cpp_145_108, 0
  condbr %InExpressionTranslator_cpp_147_109 %loopInTable110 %loopDoneInTable111

loopInTable110:
  %entry112 = phi i32 [%InExpressionTranslator_cpp_145_108, %cont103 %InExpressionTranslator_cpp_164_136, %cont121]
  %CodeGen_cpp_1397_113 = zext i64 %entry112
  %InExpressionTranslator_cpp_149_114 = getelementptr int8 global %238, %CodeGen_cpp_1397_113
  %InExpressionTranslator_cpp_153_115 = getelementptr int8 %InExpressionTranslator_cpp_149_114, i64 4
  %MaterializationHelper_cpp_230_116 = load int32 %InExpressionTranslator_cpp_153_115
  %MaterializationHelper_cpp_233_117 = getelementptr int8 %InExpressionTranslator_cpp_153_115, i64 4
  %MaterializationHelper_cpp_620_118 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_117, %MaterializationHelper_cpp_230_116)
  %Char_cpp_113_122 = extractdata128 i64 %RelationMappedLogic_cpp_324_22
  %Char_cpp_113_123 = extractdata128 i64 %MaterializationHelper_cpp_620_118
  %Char_cpp_114_124 = cmpeq i64 %Char_cpp_113_122, %Char_cpp_113_123
  condbr %Char_cpp_114_124 %then125 %cont133

then125:
  %Char_cpp_115_126 = extractdata128 i64 %MaterializationHelper_cpp_620_118
  %Char_cpp_115_127 = extractdata128 i64 %RelationMappedLogic_cpp_324_22
  %Char_cpp_115_128 = cmpeq i64 %Char_cpp_115_127, %Char_cpp_115_126
  condbr %Char_cpp_115_128 %then129 %else130

then129:
  br %cont132

else130:
  %Char_cpp_118_131 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_22, %MaterializationHelper_cpp_620_118)
  br %cont132

cont132:
  %9349 = phi bool [bool true, %then129 %Char_cpp_118_131, %else130]
  br %cont133

cont133:
  %9385 = phi bool [%9349, %cont132 bool false, %loopInTable110]
  %ConsumerContext_cpp_417_134 = not bool %9385
  condbr %ConsumerContext_cpp_417_134 %cont121 %else135

else135:
  br %in105

cont121:
  %InExpressionTranslator_cpp_164_136 = load int32 %InExpressionTranslator_cpp_149_114
  %InExpressionTranslator_cpp_165_137 = cmpne i32 %InExpressionTranslator_cpp_164_136, 0
  condbr %InExpressionTranslator_cpp_165_137 %loopInTable110 %loopDoneInTable111

loopDoneInTable111:
  br %notFound104

notFound104:
  br %in105

in105:
  %InExpressionTranslator_cpp_182_138 = phi bool [bool false, %notFound104 bool true, %else135]
  %Bool_cpp_117_139 = and bool %Bool_cpp_117_93, %8411
  %Bool_cpp_117_140 = and bool %Bool_cpp_117_139, %InExpressionTranslator_cpp_182_138
  %Bool_cpp_216_ = or bool %Bool_cpp_117_40, %Bool_cpp_117_90
  %Bool_cpp_216_141 = or bool %Bool_cpp_216_, %Bool_cpp_117_140
  condbr %Bool_cpp_216_141 %then142 %contScan

then142:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_143 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_143
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_144 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_145 = mul i64 %Hash_cpp_380_144, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_145, i64 40)
  store int32 %RelationMappedLogic_cpp_308_143, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_22)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_146 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_150_146
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %4418, data128 %4432)

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %5008, int64 %5022)

declare data128 @_ZN5umbra11TextRuntime17deserializeStringEPKhj(int8* %5536, int32 %5550)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %10109, int64 %10123, int64 %10137)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %10283, data128 %10297)

define int32 @_12_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %10881)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %10963, int8* %10977, int32 %10991)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %11031, int32 %11045)

define int32 @_12_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %11289, object umbra::ChainingHashTable::Collector* %11303)

define int32 @_12_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %11543, i64 1, global %11654, i32 6)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %11429)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %11461)

define int32 @_12_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 17)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %11990, int64 %12004)

define int32 @_12_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %12160)

define int32 @_12_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_12_groupby_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4456448
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_113_9 = extractdata128 i64 {5281672621358841873,global %13866}
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_9
  condbr %Char_cpp_114_ %then %cont13

then:
  %Char_cpp_115_ = extractdata128 i64 {5281672621358841873,global %13866}
  %Char_cpp_115_10 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_11 = cmpeq i64 %Char_cpp_115_10, %Char_cpp_115_
  condbr %Char_cpp_115_11 %then12 %else

then12:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, {5281672621358841873,global %13866})
  br %cont

cont:
  %14169 = phi bool [bool true, %then12 %Char_cpp_118_, %else]
  br %cont13

cont13:
  %14205 = phi bool [%14169, %cont bool false, %loopTuples]
  condbr %14205 %then14 %contScan

then14:
  %RelationMappedLogic_cpp_303_15 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 5505024
  %RelationMappedLogic_cpp_319_16 = getelementptr data128 %RelationMappedLogic_cpp_303_15, %localTid
  %RelationMappedLogic_cpp_320_17 = load int64 %RelationMappedLogic_cpp_319_16
  %RelationMappedLogic_cpp_320_18 = load int64 %RelationMappedLogic_cpp_319_16, i32 1
  %RelationMappedLogic_cpp_321_19 = trunc i32 %RelationMappedLogic_cpp_320_17
  %RelationMappedLogic_cpp_322_20 = cmpult i32 12, %RelationMappedLogic_cpp_321_19
  %RelationMappedLogic_cpp_322_21 = add i64 %RelationMappedLogic_cpp_320_18, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_22 = select i64 %RelationMappedLogic_cpp_322_20, %RelationMappedLogic_cpp_322_21, %RelationMappedLogic_cpp_320_18
  %RelationMappedLogic_cpp_324_23 = builddata128 d128 %RelationMappedLogic_cpp_320_17 %RelationMappedLogic_cpp_322_22
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_23, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 62
  %InExpressionTranslator_cpp_145_24 = load int32 global %356, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_24, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_24, %then14 %InExpressionTranslator_cpp_164_, %cont26]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %356, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Char_cpp_113_27 = extractdata128 i64 %RelationMappedLogic_cpp_324_23
  %Char_cpp_113_28 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_114_29 = cmpeq i64 %Char_cpp_113_27, %Char_cpp_113_28
  condbr %Char_cpp_114_29 %then30 %cont38

then30:
  %Char_cpp_115_31 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_115_32 = extractdata128 i64 %RelationMappedLogic_cpp_324_23
  %Char_cpp_115_33 = cmpeq i64 %Char_cpp_115_32, %Char_cpp_115_31
  condbr %Char_cpp_115_33 %then34 %else35

then34:
  br %cont37

else35:
  %Char_cpp_118_36 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_23, %MaterializationHelper_cpp_620_)
  br %cont37

cont37:
  %15580 = phi bool [bool true, %then34 %Char_cpp_118_36, %else35]
  br %cont38

cont38:
  %15616 = phi bool [%15580, %cont37 bool false, %loopInTable]
  %ConsumerContext_cpp_417_ = not bool %15616
  condbr %ConsumerContext_cpp_417_ %cont26 %else39

else39:
  br %in

cont26:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else39]
  condbr %InExpressionTranslator_cpp_182_ %then40 %contScan

then40:
  %RelationMappedLogic_cpp_303_41 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_41, %localTid
  %Numeric_cpp_278_ = cmpsle i64 100, %RelationMappedLogic_cpp_309_
  %Numeric_cpp_278_42 = cmpsle i64 %RelationMappedLogic_cpp_309_, 1100
  %Bool_cpp_117_ = and bool %Numeric_cpp_278_, %Numeric_cpp_278_42
  %Numeric_cpp_278_43 = cmpsle i64 1000, %RelationMappedLogic_cpp_309_
  %Numeric_cpp_278_44 = cmpsle i64 %RelationMappedLogic_cpp_309_, 2000
  %Bool_cpp_117_45 = and bool %Numeric_cpp_278_43, %Numeric_cpp_278_44
  %Numeric_cpp_278_46 = cmpsle i64 2000, %RelationMappedLogic_cpp_309_
  %Numeric_cpp_278_47 = cmpsle i64 %RelationMappedLogic_cpp_309_, 3000
  %Bool_cpp_117_48 = and bool %Numeric_cpp_278_46, %Numeric_cpp_278_47
  %Bool_cpp_216_ = or bool %Bool_cpp_117_, %Bool_cpp_117_45
  %Bool_cpp_216_49 = or bool %Bool_cpp_216_, %Bool_cpp_117_48
  condbr %Bool_cpp_216_49 %then50 %contScan

then50:
  %RelationMappedLogic_cpp_303_51 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_51, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_52 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_53 = mul i64 %Hash_cpp_380_52, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_53)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %then50 %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_54 = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_55 = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_56 = load data128 %MaterializationHelper_cpp_233_55
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_55, i64 16
  %MaterializationHelper_cpp_230_57 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_58 = getelementptr int8 %MaterializationHelper_cpp_233_55, i64 32
  %MaterializationHelper_cpp_230_59 = load int32 %MaterializationHelper_cpp_229_58
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_54
  %ConsumerContext_cpp_417_61 = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_61 %continueProbe %else62

else62:
  %Integer_cpp_89_ = cmpsle i32 1, %MaterializationHelper_cpp_230_59
  %Integer_cpp_89_63 = cmpsle i32 %MaterializationHelper_cpp_230_59, 5
  %Bool_cpp_117_64 = and bool %Integer_cpp_89_, %Integer_cpp_89_63
  %Char_cpp_113_65 = extractdata128 i64 %MaterializationHelper_cpp_230_57
  %Char_cpp_114_66 = cmpeq i64 %Char_cpp_113_65, 7953764044706414600
  condbr %Char_cpp_114_66 %then67 %cont74

then67:
  %Char_cpp_115_68 = extractdata128 i64 %MaterializationHelper_cpp_230_57
  %Char_cpp_115_69 = cmpeq i64 %Char_cpp_115_68, 842081124
  condbr %Char_cpp_115_69 %then70 %else71

then70:
  br %cont73

else71:
  %Char_cpp_118_72 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_57, d128 {7953764044706414600,842081124})
  br %cont73

cont73:
  %17838 = phi bool [bool true, %then70 %Char_cpp_118_72, %else71]
  br %cont74

cont74:
  %17874 = phi bool [%17838, %cont73 bool false, %else62]
  %Hash_cpp_383_77 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_56, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_78 = lshr i64 %Hash_cpp_383_77, 61
  %InExpressionTranslator_cpp_145_79 = load int32 global %0, %InExpressionTranslator_cpp_145_78
  %InExpressionTranslator_cpp_147_80 = cmpne i32 %InExpressionTranslator_cpp_145_79, 0
  condbr %InExpressionTranslator_cpp_147_80 %loopInTable81 %loopDoneInTable82

loopInTable81:
  %entry83 = phi i32 [%InExpressionTranslator_cpp_145_79, %cont74 %InExpressionTranslator_cpp_164_107, %cont92]
  %CodeGen_cpp_1397_84 = zext i64 %entry83
  %InExpressionTranslator_cpp_149_85 = getelementptr int8 global %0, %CodeGen_cpp_1397_84
  %InExpressionTranslator_cpp_153_86 = getelementptr int8 %InExpressionTranslator_cpp_149_85, i64 4
  %MaterializationHelper_cpp_230_87 = load int32 %InExpressionTranslator_cpp_153_86
  %MaterializationHelper_cpp_233_88 = getelementptr int8 %InExpressionTranslator_cpp_153_86, i64 4
  %MaterializationHelper_cpp_620_89 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_88, %MaterializationHelper_cpp_230_87)
  %Char_cpp_113_93 = extractdata128 i64 %MaterializationHelper_cpp_230_56
  %Char_cpp_113_94 = extractdata128 i64 %MaterializationHelper_cpp_620_89
  %Char_cpp_114_95 = cmpeq i64 %Char_cpp_113_93, %Char_cpp_113_94
  condbr %Char_cpp_114_95 %then96 %cont104

then96:
  %Char_cpp_115_97 = extractdata128 i64 %MaterializationHelper_cpp_620_89
  %Char_cpp_115_98 = extractdata128 i64 %MaterializationHelper_cpp_230_56
  %Char_cpp_115_99 = cmpeq i64 %Char_cpp_115_98, %Char_cpp_115_97
  condbr %Char_cpp_115_99 %then100 %else101

then100:
  br %cont103

else101:
  %Char_cpp_118_102 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_56, %MaterializationHelper_cpp_620_89)
  br %cont103

cont103:
  %18793 = phi bool [bool true, %then100 %Char_cpp_118_102, %else101]
  br %cont104

cont104:
  %18829 = phi bool [%18793, %cont103 bool false, %loopInTable81]
  %ConsumerContext_cpp_417_105 = not bool %18829
  condbr %ConsumerContext_cpp_417_105 %cont92 %else106

else106:
  br %in76

cont92:
  %InExpressionTranslator_cpp_164_107 = load int32 %InExpressionTranslator_cpp_149_85
  %InExpressionTranslator_cpp_165_108 = cmpne i32 %InExpressionTranslator_cpp_164_107, 0
  condbr %InExpressionTranslator_cpp_165_108 %loopInTable81 %loopDoneInTable82

loopDoneInTable82:
  br %notFound75

notFound75:
  br %in76

in76:
  %InExpressionTranslator_cpp_182_109 = phi bool [bool false, %notFound75 bool true, %else106]
  %Numeric_cpp_278_110 = cmpsle i64 100, %RelationMappedLogic_cpp_309_
  %Numeric_cpp_278_111 = cmpsle i64 %RelationMappedLogic_cpp_309_, 1100
  %Bool_cpp_117_112 = and bool %Numeric_cpp_278_110, %Numeric_cpp_278_111
  %Bool_cpp_117_113 = and bool %Bool_cpp_117_64, %17874
  %Bool_cpp_117_114 = and bool %Bool_cpp_117_113, %InExpressionTranslator_cpp_182_109
  %Bool_cpp_117_115 = and bool %Bool_cpp_117_114, %Bool_cpp_117_112
  %Integer_cpp_89_116 = cmpsle i32 1, %MaterializationHelper_cpp_230_59
  %Integer_cpp_89_117 = cmpsle i32 %MaterializationHelper_cpp_230_59, 10
  %Bool_cpp_117_118 = and bool %Integer_cpp_89_116, %Integer_cpp_89_117
  %Char_cpp_113_119 = extractdata128 i64 %MaterializationHelper_cpp_230_57
  %Char_cpp_114_120 = cmpeq i64 %Char_cpp_113_119, 7953764044706414600
  condbr %Char_cpp_114_120 %then121 %cont128

then121:
  %Char_cpp_115_122 = extractdata128 i64 %MaterializationHelper_cpp_230_57
  %Char_cpp_115_123 = cmpeq i64 %Char_cpp_115_122, 858923876
  condbr %Char_cpp_115_123 %then124 %else125

then124:
  br %cont127

else125:
  %Char_cpp_118_126 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_57, d128 {7953764044706414600,858923876})
  br %cont127

cont127:
  %19624 = phi bool [bool true, %then124 %Char_cpp_118_126, %else125]
  br %cont128

cont128:
  %19660 = phi bool [%19624, %cont127 bool false, %in76]
  %Hash_cpp_383_131 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_56, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_132 = lshr i64 %Hash_cpp_383_131, 61
  %InExpressionTranslator_cpp_145_133 = load int32 global %117, %InExpressionTranslator_cpp_145_132
  %InExpressionTranslator_cpp_147_134 = cmpne i32 %InExpressionTranslator_cpp_145_133, 0
  condbr %InExpressionTranslator_cpp_147_134 %loopInTable135 %loopDoneInTable136

loopInTable135:
  %entry137 = phi i32 [%InExpressionTranslator_cpp_145_133, %cont128 %InExpressionTranslator_cpp_164_161, %cont146]
  %CodeGen_cpp_1397_138 = zext i64 %entry137
  %InExpressionTranslator_cpp_149_139 = getelementptr int8 global %117, %CodeGen_cpp_1397_138
  %InExpressionTranslator_cpp_153_140 = getelementptr int8 %InExpressionTranslator_cpp_149_139, i64 4
  %MaterializationHelper_cpp_230_141 = load int32 %InExpressionTranslator_cpp_153_140
  %MaterializationHelper_cpp_233_142 = getelementptr int8 %InExpressionTranslator_cpp_153_140, i64 4
  %MaterializationHelper_cpp_620_143 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_142, %MaterializationHelper_cpp_230_141)
  %Char_cpp_113_147 = extractdata128 i64 %MaterializationHelper_cpp_230_56
  %Char_cpp_113_148 = extractdata128 i64 %MaterializationHelper_cpp_620_143
  %Char_cpp_114_149 = cmpeq i64 %Char_cpp_113_147, %Char_cpp_113_148
  condbr %Char_cpp_114_149 %then150 %cont158

then150:
  %Char_cpp_115_151 = extractdata128 i64 %MaterializationHelper_cpp_620_143
  %Char_cpp_115_152 = extractdata128 i64 %MaterializationHelper_cpp_230_56
  %Char_cpp_115_153 = cmpeq i64 %Char_cpp_115_152, %Char_cpp_115_151
  condbr %Char_cpp_115_153 %then154 %else155

then154:
  br %cont157

else155:
  %Char_cpp_118_156 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_56, %MaterializationHelper_cpp_620_143)
  br %cont157

cont157:
  %20598 = phi bool [bool true, %then154 %Char_cpp_118_156, %else155]
  br %cont158

cont158:
  %20634 = phi bool [%20598, %cont157 bool false, %loopInTable135]
  %ConsumerContext_cpp_417_159 = not bool %20634
  condbr %ConsumerContext_cpp_417_159 %cont146 %else160

else160:
  br %in130

cont146:
  %InExpressionTranslator_cpp_164_161 = load int32 %InExpressionTranslator_cpp_149_139
  %InExpressionTranslator_cpp_165_162 = cmpne i32 %InExpressionTranslator_cpp_164_161, 0
  condbr %InExpressionTranslator_cpp_165_162 %loopInTable135 %loopDoneInTable136

loopDoneInTable136:
  br %notFound129

notFound129:
  br %in130

in130:
  %InExpressionTranslator_cpp_182_163 = phi bool [bool false, %notFound129 bool true, %else160]
  %Numeric_cpp_278_164 = cmpsle i64 1000, %RelationMappedLogic_cpp_309_
  %Numeric_cpp_278_165 = cmpsle i64 %RelationMappedLogic_cpp_309_, 2000
  %Bool_cpp_117_166 = and bool %Numeric_cpp_278_164, %Numeric_cpp_278_165
  %Bool_cpp_117_167 = and bool %Bool_cpp_117_118, %19660
  %Bool_cpp_117_168 = and bool %Bool_cpp_117_167, %InExpressionTranslator_cpp_182_163
  %Bool_cpp_117_169 = and bool %Bool_cpp_117_168, %Bool_cpp_117_166
  %Integer_cpp_89_170 = cmpsle i32 1, %MaterializationHelper_cpp_230_59
  %Integer_cpp_89_171 = cmpsle i32 %MaterializationHelper_cpp_230_59, 15
  %Bool_cpp_117_172 = and bool %Integer_cpp_89_170, %Integer_cpp_89_171
  %Char_cpp_113_173 = extractdata128 i64 %MaterializationHelper_cpp_230_57
  %Char_cpp_114_174 = cmpeq i64 %Char_cpp_113_173, 7953764044706414600
  condbr %Char_cpp_114_174 %then175 %cont182

then175:
  %Char_cpp_115_176 = extractdata128 i64 %MaterializationHelper_cpp_230_57
  %Char_cpp_115_177 = cmpeq i64 %Char_cpp_115_176, 875766628
  condbr %Char_cpp_115_177 %then178 %else179

then178:
  br %cont181

else179:
  %Char_cpp_118_180 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_57, d128 {7953764044706414600,875766628})
  br %cont181

cont181:
  %21429 = phi bool [bool true, %then178 %Char_cpp_118_180, %else179]
  br %cont182

cont182:
  %21465 = phi bool [%21429, %cont181 bool false, %in130]
  %Hash_cpp_383_185 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_56, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_186 = lshr i64 %Hash_cpp_383_185, 61
  %InExpressionTranslator_cpp_145_187 = load int32 global %238, %InExpressionTranslator_cpp_145_186
  %InExpressionTranslator_cpp_147_188 = cmpne i32 %InExpressionTranslator_cpp_145_187, 0
  condbr %InExpressionTranslator_cpp_147_188 %loopInTable189 %loopDoneInTable190

loopInTable189:
  %entry191 = phi i32 [%InExpressionTranslator_cpp_145_187, %cont182 %InExpressionTranslator_cpp_164_215, %cont200]
  %CodeGen_cpp_1397_192 = zext i64 %entry191
  %InExpressionTranslator_cpp_149_193 = getelementptr int8 global %238, %CodeGen_cpp_1397_192
  %InExpressionTranslator_cpp_153_194 = getelementptr int8 %InExpressionTranslator_cpp_149_193, i64 4
  %MaterializationHelper_cpp_230_195 = load int32 %InExpressionTranslator_cpp_153_194
  %MaterializationHelper_cpp_233_196 = getelementptr int8 %InExpressionTranslator_cpp_153_194, i64 4
  %MaterializationHelper_cpp_620_197 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_196, %MaterializationHelper_cpp_230_195)
  %Char_cpp_113_201 = extractdata128 i64 %MaterializationHelper_cpp_230_56
  %Char_cpp_113_202 = extractdata128 i64 %MaterializationHelper_cpp_620_197
  %Char_cpp_114_203 = cmpeq i64 %Char_cpp_113_201, %Char_cpp_113_202
  condbr %Char_cpp_114_203 %then204 %cont212

then204:
  %Char_cpp_115_205 = extractdata128 i64 %MaterializationHelper_cpp_620_197
  %Char_cpp_115_206 = extractdata128 i64 %MaterializationHelper_cpp_230_56
  %Char_cpp_115_207 = cmpeq i64 %Char_cpp_115_206, %Char_cpp_115_205
  condbr %Char_cpp_115_207 %then208 %else209

then208:
  br %cont211

else209:
  %Char_cpp_118_210 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_56, %MaterializationHelper_cpp_620_197)
  br %cont211

cont211:
  %22403 = phi bool [bool true, %then208 %Char_cpp_118_210, %else209]
  br %cont212

cont212:
  %22439 = phi bool [%22403, %cont211 bool false, %loopInTable189]
  %ConsumerContext_cpp_417_213 = not bool %22439
  condbr %ConsumerContext_cpp_417_213 %cont200 %else214

else214:
  br %in184

cont200:
  %InExpressionTranslator_cpp_164_215 = load int32 %InExpressionTranslator_cpp_149_193
  %InExpressionTranslator_cpp_165_216 = cmpne i32 %InExpressionTranslator_cpp_164_215, 0
  condbr %InExpressionTranslator_cpp_165_216 %loopInTable189 %loopDoneInTable190

loopDoneInTable190:
  br %notFound183

notFound183:
  br %in184

in184:
  %InExpressionTranslator_cpp_182_217 = phi bool [bool false, %notFound183 bool true, %else214]
  %Numeric_cpp_278_218 = cmpsle i64 2000, %RelationMappedLogic_cpp_309_
  %Numeric_cpp_278_219 = cmpsle i64 %RelationMappedLogic_cpp_309_, 3000
  %Bool_cpp_117_220 = and bool %Numeric_cpp_278_218, %Numeric_cpp_278_219
  %Bool_cpp_117_221 = and bool %Bool_cpp_117_172, %21465
  %Bool_cpp_117_222 = and bool %Bool_cpp_117_221, %InExpressionTranslator_cpp_182_217
  %Bool_cpp_117_223 = and bool %Bool_cpp_117_222, %Bool_cpp_117_220
  %Bool_cpp_216_224 = or bool %Bool_cpp_117_115, %Bool_cpp_117_169
  %Bool_cpp_216_225 = or bool %Bool_cpp_216_224, %Bool_cpp_117_223
  condbr %Bool_cpp_216_225 %then226 %continueProbe

then226:
  %RelationMappedLogic_cpp_303_227 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_228 = load int64 %RelationMappedLogic_cpp_303_227, %localTid
  %RelationMappedLogic_cpp_303_229 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_230 = load int64 %RelationMappedLogic_cpp_303_229, %localTid
  br %cont231

cont231:
  %Numeric_cpp_763_ = checkedssub i64 100, %RelationMappedLogic_cpp_309_230 %cont232 %overflow

cont232:
  %BigNumeric_cpp_863_ = ashr i64 %RelationMappedLogic_cpp_309_228, 63
  %BigNumeric_cpp_863_233 = builddata128 d128 %RelationMappedLogic_cpp_309_228 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_234 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_235 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_234
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_233, %BigNumeric_cpp_863_235)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, i64 4
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 0, i32 0
  %PreaggregationLogic_cpp_25_236 = cmpne i64 %PreaggregationLogic_cpp_25_, 3749646514382295044
  condbr %PreaggregationLogic_cpp_25_236 %then237 %else238

then237:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store data128 %Numeric_cpp_698_, %PreaggregationLogic_cpp_29_
  store int8 i8 0, %MaterializationHelper_cpp_726_
  br %cont244

else238:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 1
  %MaterializationHelper_cpp_726_239 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_239
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_240 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_240 %then241 %else242

then241:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  store data128 %Numeric_cpp_698_, %PreaggregationLogic_cpp_36_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_239
  br %cont243

else242:
  %MaterializationHelper_cpp_977_ = load data128 %PreaggregationLogic_cpp_36_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %Numeric_cpp_698_)
  store data128 %BigNumeric_cpp_688_, %PreaggregationLogic_cpp_36_
  br %cont243

cont243:
  br %cont244

cont244:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %16799, int64 %16813)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %23476, data128 %23490)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %23822, int64 %23836)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %24421, data128 %24435)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %24569, int8* %24583)

define int32 @_12_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %25094, int8* %25108, int64 %25122)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %25213, int8* %25227)

define int32 @_12_groupby_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 16
  %GroupByTranslator_cpp_121_2 = getelementptr int8 %chainEntry, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_3 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  %MaterializationHelper_cpp_726_4 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 16
  %MaterializationHelper_cpp_727_5 = load int8 %MaterializationHelper_cpp_726_4
  %MaterializationHelper_cpp_780_6 = and i8 %MaterializationHelper_cpp_727_5, 1
  %MaterializationHelper_cpp_780_7 = cmpne i8 %MaterializationHelper_cpp_780_6, 0
  condbr %MaterializationHelper_cpp_780_7 %then8 %else

then8:
  br %cont13

else:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  condbr %MaterializationHelper_cpp_780_3 %then9 %else10

then9:
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_121_
  store data128 %MaterializationHelper_cpp_977_, %GroupByTranslator_cpp_121_2
  br %cont

else10:
  %MaterializationHelper_cpp_977_11 = load data128 %GroupByTranslator_cpp_121_2
  %MaterializationHelper_cpp_977_12 = load data128 %GroupByTranslator_cpp_121_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_12)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_121_2
  br %cont

cont:
  br %cont13

cont13:
  %27146 = phi i8 [%MaterializationHelper_cpp_727_, %then8 %MaterializationHelper_cpp_752_, %cont]
  store int8 %27146, %MaterializationHelper_cpp_726_
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_14 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_14, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 33
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 15
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %25563)

define int32 @_12_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %27994, int8* %28008)

define int32 @_12_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_12_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_12_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_12_map_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %cont7]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_1 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_1 %then %else

then:
  br %cont

else:
  %MaterializationHelper_cpp_977_ = load data128 %PreaggregationLogic_cpp_140_
  br %cont

cont:
  %29129 = phi d128 [d128 {0,0}, %then %MaterializationHelper_cpp_977_, %else]
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then2 %else3

then2:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont4

else3:
  br %cont4

cont4:
  condbr %MaterializationHelper_cpp_780_1 %then5 %else6

then5:
  call void _ZN5umbra16RuntimeFunctions10outputNullERNS_12OutputTargetE (ptr 0x5581d25fc7c0)
  br %cont7

else6:
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5581d25fc7c0, i64 504403158684926977, %29129)
  br %cont7

cont7:
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 19
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %29313, int8 %29327)

declare void @_ZN5umbra16RuntimeFunctions10outputNullERNS_12OutputTargetE(object umbra::OutputTarget* %29458)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %29514, int64 %29528, data128 %29542)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %29628)

define int32 @_12_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_12_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_2)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %30172)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %30324)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %30407)
`;