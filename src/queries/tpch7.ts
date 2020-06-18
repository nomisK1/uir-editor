export const tpch7 = `const %0[45] ="\\000\\000\\000\\000\\036\\000\\000\\000\\020\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\006\\000\\000\\000FRANCE\\000\\000\\000\\000\\007\\000\\000\\000GERMANY"

const %72[45] ="\\000\\000\\000\\000\\020\\000\\000\\000\\037\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\007\\000\\000\\000GERMANY\\000\\000\\000\\000\\006\\000\\000\\000FRANCE"

const %145[66] =")\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\020\\000\\000\\000\\000\\000\\000\\000\\006\\000\\000\\000\\007\\000\\000\\000FRANCEGERMANY\\000\\000\\000\\000\\007\\000\\000\\000\\006\\000\\000\\000GERMANYFRANCE"

const %2842[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %3199[0] =""

const %3237[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %16347[8] ="\\000\\000\\000\\000\\003\\000\\000\\000"

const %25577[72] ="\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\004V\\000\\0007a%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\021d%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %25688[20] ="\\000\\000\\000\\000\\002\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\012\\000\\000\\000"

const %44048[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %46355[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 312
  call void _ZN5umbra12TempOperator4initEPS0_ (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 336
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 432
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_3, i32 0)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 480
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 576
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_5, i32 0)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 624
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 720
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_7, i32 0)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 768
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 864
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_9, i32 0)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 912
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_10, i64 52)
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 25504
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_12, %state, global %2842)
  return 1
}

define int32 @_9_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 16
  %MaterializationHelper_cpp_230_0 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_1 = getelementptr int8 %left, i64 32
  %MaterializationHelper_cpp_230_2 = load int32 %MaterializationHelper_cpp_229_1
  %MaterializationHelper_cpp_230_3 = load data128 %right
  %MaterializationHelper_cpp_229_4 = getelementptr int8 %right, i64 16
  %MaterializationHelper_cpp_230_5 = load data128 %MaterializationHelper_cpp_229_4
  %MaterializationHelper_cpp_229_6 = getelementptr int8 %right, i64 32
  %MaterializationHelper_cpp_230_7 = load int32 %MaterializationHelper_cpp_229_6
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_3)
  %SortTranslator_cpp_72_ = cmpne i32 %Char_cpp_136_, 0
  condbr %SortTranslator_cpp_72_ %then %cont

then:
  return %Char_cpp_136_

cont:
  %Char_cpp_136_9 = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_5)
  %Integer_cpp_93_ = cmpslt i32 %MaterializationHelper_cpp_230_2, %MaterializationHelper_cpp_230_7
  %Integer_cpp_93_10 = zext i32 %Integer_cpp_93_
  %Integer_cpp_93_11 = cmpslt i32 %MaterializationHelper_cpp_230_7, %MaterializationHelper_cpp_230_2
  %Integer_cpp_93_12 = zext i32 %Integer_cpp_93_11
  %Integer_cpp_93_13 = sub i32 %Integer_cpp_93_12, %Integer_cpp_93_10
  %SortTranslator_cpp_103_ = cmpeq i32 %Char_cpp_136_9, 0
  %SortTranslator_cpp_103_14 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_15 = and i32 %Integer_cpp_93_13, %SortTranslator_cpp_103_14
  %SortTranslator_cpp_103_16 = or i32 %Char_cpp_136_9, %SortTranslator_cpp_103_15
  return %SortTranslator_cpp_103_16
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %1066, data128 %1080)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1630)

declare void @_ZN5umbra12TempOperator4initEPS0_(object umbra::TempOperator* %1830)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %2030, int32 %2044)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %2740, int64 %2754)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %2977, int8* %2991, int8* %3005)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %3199, i64 0, global %3237, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 56, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %3364, int8* %3378, int64 %3392, object umbra::Relation::RestrictionInfo* %3406, int64 %3420, int32* %3434, int32 %3448)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %3534, int32 %3548, int32 %3562, int32 %3576, int32 %3590)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12TempOperator4initEPS0_ (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12TempOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12TempOperator7destroyEPS0_(object umbra::TempOperator* %3886)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %4018, int32 %4032)

define int32 @_9_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 40
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 62
  %InExpressionTranslator_cpp_145_9 = load int32 global %0, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_9, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_9, %loopTuples %InExpressionTranslator_cpp_164_, %cont]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %0, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_113_11 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_11
  condbr %Char_cpp_114_ %then %cont16

then:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_115_12 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_13 = cmpeq i64 %Char_cpp_115_12, %Char_cpp_115_
  condbr %Char_cpp_115_13 %then14 %else

then14:
  br %cont15

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, %MaterializationHelper_cpp_620_)
  br %cont15

cont15:
  %6732 = phi bool [bool true, %then14 %Char_cpp_118_, %else]
  br %cont16

cont16:
  %6775 = phi bool [%6732, %cont15 bool false, %loopInTable]
  %ConsumerContext_cpp_417_ = not bool %6775
  condbr %ConsumerContext_cpp_417_ %cont %else17

else17:
  br %in

cont:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else17]
  condbr %InExpressionTranslator_cpp_182_ %then18 %contScan

then18:
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %BNLJoinTranslator_cpp_394_ = call ptr _ZN5umbra12TempOperator10storeTupleEm (%Pipeline_cpp_276_, i64 20)
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%BNLJoinTranslator_cpp_394_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_161_ = getelementptr int8 %BNLJoinTranslator_cpp_394_, i64 16
  store int32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_161_
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

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %5752, int64 %5766)

declare data128 @_ZN5umbra11TextRuntime17deserializeStringEPKhj(int8* %6279, int32 %6293)

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %6658, data128 %6672)

declare int8* @_ZN5umbra12TempOperator10storeTupleEm(object umbra::TempOperator* %7179, int64 %7193)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %7256, data128 %7270)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %Pipeline_cpp_64_ = load object umbra::GlobalStateHeader %state, i32 0, i32 2
  %Pipeline_cpp_66_ = load object umbra::LocalStateHeader %Pipeline_cpp_64_, i32 0, i32 2
  %Pipeline_cpp_67_ = load object umbra::LocalStateHeader %Pipeline_cpp_64_, i32 0, i32 0
  %Pipeline_cpp_68_ = getelementptr int8 %Pipeline_cpp_64_, i64 64
  %Pipeline_cpp_55_ = cmpult i32 0, %Pipeline_cpp_66_
  condbr %Pipeline_cpp_55_ %loopStates %loopDoneStates

loopStates:
  %Thread = phi i32 [i32 0, %body %Pipeline_cpp_96_, %continue]
  %Pipeline_cpp_75_ = zext i64 %Thread
  %Pipeline_cpp_75_0 = mul i64 %Pipeline_cpp_75_, %Pipeline_cpp_67_
  %Pipeline_cpp_75_1 = getelementptr int8 %Pipeline_cpp_68_, %Pipeline_cpp_75_0
  %Pipeline_cpp_78_ = load int8 %Pipeline_cpp_75_1, i32 -1
  %Pipeline_cpp_78_2 = cmpeq i8 %Pipeline_cpp_78_, 0
  condbr %Pipeline_cpp_78_2 %continue %else

else:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 312
  %Pipeline_cpp_276_ = getelementptr int8 %Pipeline_cpp_75_1, i64 32
  call void _ZN5umbra12TempOperator9mergeIntoERS0_ (%Pipeline_cpp_276_, %CompilationContext_cpp_214_)
  br %continue

continue:
  %Pipeline_cpp_96_ = add i32 %Thread, 1
  %Pipeline_cpp_97_ = cmpult i32 %Pipeline_cpp_96_, %Pipeline_cpp_66_
  condbr %Pipeline_cpp_97_ %loopStates %loopDoneStates

loopDoneStates:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_3 = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_3, %CompilationContext_cpp_214_4, i64 6, global %3199, i64 0, global %3237, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 7, i32 8, i32 9)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 10)
  return 11
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %7765)

declare void @_ZN5umbra12TempOperator9mergeIntoERS0_(object umbra::TempOperator* %8356, object umbra::TempOperator* %8370)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %8496)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %8856)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %9008)

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 40
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 62
  %InExpressionTranslator_cpp_145_9 = load int32 global %72, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_9, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_9, %loopTuples %InExpressionTranslator_cpp_164_, %cont]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %72, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_113_11 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_11
  condbr %Char_cpp_114_ %then %cont16

then:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_115_12 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_13 = cmpeq i64 %Char_cpp_115_12, %Char_cpp_115_
  condbr %Char_cpp_115_13 %then14 %else

then14:
  br %cont15

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, %MaterializationHelper_cpp_620_)
  br %cont15

cont15:
  %11571 = phi bool [bool true, %then14 %Char_cpp_118_, %else]
  br %cont16

cont16:
  %11607 = phi bool [%11571, %cont15 bool false, %loopInTable]
  %ConsumerContext_cpp_417_ = not bool %11607
  condbr %ConsumerContext_cpp_417_ %cont %else17

else17:
  br %in

cont:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else17]
  condbr %InExpressionTranslator_cpp_182_ %then18 %contScan

then18:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 312
  %BNLJoinTranslator_cpp_431_ = getelementptr object umbra::TempOperator %CompilationContext_cpp_214_, i32 0, i32 0
  %BNLJoinTranslator_cpp_431_19 = load object umbra::TupleMaterializationChunked %BNLJoinTranslator_cpp_431_, i32 0, i32 0
  %BNLJoinTranslator_cpp_432_ = isnotnull ptr %BNLJoinTranslator_cpp_431_19
  condbr %BNLJoinTranslator_cpp_432_ %loopChunks %loopDoneChunks

loopChunks:
  %chunk = phi ptr [%BNLJoinTranslator_cpp_431_19, %then18 %BNLJoinTranslator_cpp_672_, %loopDoneTuples21]
  %BNLJoinTranslator_cpp_436_ = getelementptr object umbra::TupleMaterializationChunked::Chunk %chunk, i32 1
  %BNLJoinTranslator_cpp_437_ = load object umbra::TupleMaterializationChunked::Chunk %chunk, i32 0, i32 2
  %BNLJoinTranslator_cpp_441_ = cmpne ptr %BNLJoinTranslator_cpp_436_, %BNLJoinTranslator_cpp_437_
  condbr %BNLJoinTranslator_cpp_441_ %loopTuples20 %loopDoneTuples21

loopTuples20:
  %tuple = phi ptr [%BNLJoinTranslator_cpp_436_, %loopChunks %15201, %cont86]
  %MaterializationHelper_cpp_230_22 = load data128 %tuple
  %MaterializationHelper_cpp_233_23 = getelementptr int8 %tuple, i64 16
  %Hash_cpp_383_26 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_22, i64 3749646514382295044)
  %Hash_cpp_383_27 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_, %Hash_cpp_383_26)
  %InExpressionTranslator_cpp_145_28 = lshr i64 %Hash_cpp_383_27, 62
  %InExpressionTranslator_cpp_145_29 = load int32 global %145, %InExpressionTranslator_cpp_145_28
  %InExpressionTranslator_cpp_147_30 = cmpne i32 %InExpressionTranslator_cpp_145_29, 0
  condbr %InExpressionTranslator_cpp_147_30 %loopInTable31 %loopDoneInTable32

loopInTable31:
  %entry33 = phi i32 [%InExpressionTranslator_cpp_145_29, %loopTuples20 %InExpressionTranslator_cpp_164_75, %cont46]
  %CodeGen_cpp_1397_34 = zext i64 %entry33
  %InExpressionTranslator_cpp_149_35 = getelementptr int8 global %145, %CodeGen_cpp_1397_34
  %InExpressionTranslator_cpp_153_36 = getelementptr int8 %InExpressionTranslator_cpp_149_35, i64 4
  %MaterializationHelper_cpp_230_37 = load int32 %InExpressionTranslator_cpp_153_36
  %MaterializationHelper_cpp_229_ = getelementptr int8 %InExpressionTranslator_cpp_153_36, i64 4
  %MaterializationHelper_cpp_230_38 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_39 = getelementptr int8 %InExpressionTranslator_cpp_153_36, i64 8
  %MaterializationHelper_cpp_620_40 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_39, %MaterializationHelper_cpp_230_37)
  %CodeGen_cpp_1397_41 = zext i64 %MaterializationHelper_cpp_230_37
  %MaterializationHelper_cpp_622_42 = getelementptr int8 %MaterializationHelper_cpp_233_39, %CodeGen_cpp_1397_41
  %MaterializationHelper_cpp_620_43 = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_622_42, %MaterializationHelper_cpp_230_38)
  %Char_cpp_113_47 = extractdata128 i64 %MaterializationHelper_cpp_230_22
  %Char_cpp_113_48 = extractdata128 i64 %MaterializationHelper_cpp_620_40
  %Char_cpp_114_49 = cmpeq i64 %Char_cpp_113_47, %Char_cpp_113_48
  condbr %Char_cpp_114_49 %then50 %cont58

then50:
  %Char_cpp_115_51 = extractdata128 i64 %MaterializationHelper_cpp_620_40
  %Char_cpp_115_52 = extractdata128 i64 %MaterializationHelper_cpp_230_22
  %Char_cpp_115_53 = cmpeq i64 %Char_cpp_115_52, %Char_cpp_115_51
  condbr %Char_cpp_115_53 %then54 %else55

then54:
  br %cont57

else55:
  %Char_cpp_118_56 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_22, %MaterializationHelper_cpp_620_40)
  br %cont57

cont57:
  %13638 = phi bool [bool true, %then54 %Char_cpp_118_56, %else55]
  br %cont58

cont58:
  %13674 = phi bool [%13638, %cont57 bool false, %loopInTable31]
  %ConsumerContext_cpp_417_59 = not bool %13674
  condbr %ConsumerContext_cpp_417_59 %cont46 %else60

else60:
  %Char_cpp_113_61 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_113_62 = extractdata128 i64 %MaterializationHelper_cpp_620_43
  %Char_cpp_114_63 = cmpeq i64 %Char_cpp_113_61, %Char_cpp_113_62
  condbr %Char_cpp_114_63 %then64 %cont72

then64:
  %Char_cpp_115_65 = extractdata128 i64 %MaterializationHelper_cpp_620_43
  %Char_cpp_115_66 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_67 = cmpeq i64 %Char_cpp_115_66, %Char_cpp_115_65
  condbr %Char_cpp_115_67 %then68 %else69

then68:
  br %cont71

else69:
  %Char_cpp_118_70 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, %MaterializationHelper_cpp_620_43)
  br %cont71

cont71:
  %14017 = phi bool [bool true, %then68 %Char_cpp_118_70, %else69]
  br %cont72

cont72:
  %14053 = phi bool [%14017, %cont71 bool false, %else60]
  %ConsumerContext_cpp_417_73 = not bool %14053
  condbr %ConsumerContext_cpp_417_73 %cont46 %else74

else74:
  br %in25

cont46:
  %InExpressionTranslator_cpp_164_75 = load int32 %InExpressionTranslator_cpp_149_35
  %InExpressionTranslator_cpp_165_76 = cmpne i32 %InExpressionTranslator_cpp_164_75, 0
  condbr %InExpressionTranslator_cpp_165_76 %loopInTable31 %loopDoneInTable32

loopDoneInTable32:
  br %notFound24

notFound24:
  br %in25

in25:
  %InExpressionTranslator_cpp_182_77 = phi bool [bool false, %notFound24 bool true, %else74]
  condbr %InExpressionTranslator_cpp_182_77 %then78 %else85

then78:
  %MaterializationHelper_cpp_230_79 = load int32 %MaterializationHelper_cpp_233_23
  %MaterializationHelper_cpp_233_80 = getelementptr int8 %MaterializationHelper_cpp_233_23, i64 4
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_81 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_82 = mul i64 %Hash_cpp_380_81, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_82, i64 40)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_22)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_83 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int32 %MaterializationHelper_cpp_230_79, %MaterializationHelper_cpp_150_83
  br %cont86

else85:
  %MaterializationHelper_cpp_274_ = getelementptr int8 %MaterializationHelper_cpp_233_23, i64 4
  br %cont86

cont86:
  %15201 = phi ptr [%MaterializationHelper_cpp_233_80, %then78 %MaterializationHelper_cpp_274_, %else85]
  %BNLJoinTranslator_cpp_667_ = cmpne ptr %15201, %BNLJoinTranslator_cpp_437_
  condbr %BNLJoinTranslator_cpp_667_ %loopTuples20 %loopDoneTuples21

loopDoneTuples21:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  %BNLJoinTranslator_cpp_672_ = load object umbra::TupleMaterializationChunked::Chunk %chunk, i32 0, i32 1
  %BNLJoinTranslator_cpp_673_ = isnotnull ptr %BNLJoinTranslator_cpp_672_
  condbr %BNLJoinTranslator_cpp_673_ %loopChunks %loopDoneChunks

loopDoneChunks:
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
  return 10
}

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %14725, int64 %14739, int64 %14753)

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 432
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 13)
  return 12
}

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %15791, int8* %15805, int32 %15819)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %15859, int32 %15873)

define int32 @_9_join_join_tablescan_nation_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 432
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 13
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %16107, object umbra::ChainingHashTable::Collector* %16121)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 336
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 3, global %3199, i64 0, global %16347, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 14, i32 15, i32 16)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 17)
  return 18
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %16247)

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_customer(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 96
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 432
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_9 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_11 = load int32 %MaterializationHelper_cpp_229_10
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_13 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_14 = zext i64 %RelationMappedLogic_cpp_308_13
  %Hash_cpp_375_15 = crc32 i64 5961697176435608501, %Hash_cpp_265_14
  %Hash_cpp_376_16 = crc32 i64 2231409791114444147, %Hash_cpp_265_14
  %Hash_cpp_380_17 = rotr i64 %Hash_cpp_376_16, 32
  %Hash_cpp_380_18 = xor i64 %Hash_cpp_375_15, %Hash_cpp_380_17
  %Hash_cpp_380_19 = mul i64 %Hash_cpp_380_18, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_19, i64 40)
  store int32 %RelationMappedLogic_cpp_308_13, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_230_9)
  %MaterializationHelper_cpp_150_20 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_150_20
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_22 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_22 %cancellation %continueProbe

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
  return 17

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %18411, int64 %18425)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %19543, data128 %19557)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %20054, int8* %20068)

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 576
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 20)
  return 19
}

define int32 @_9_join_join_tablescan_customer_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 576
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 20
}

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 480
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %3199, i64 0, global %3237, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 21, i32 22, i32 23)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 25
}

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 76
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 576
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_9 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_11 = load int32 %MaterializationHelper_cpp_229_10
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_13 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_14 = zext i64 %RelationMappedLogic_cpp_308_13
  %Hash_cpp_375_15 = crc32 i64 5961697176435608501, %Hash_cpp_265_14
  %Hash_cpp_376_16 = crc32 i64 2231409791114444147, %Hash_cpp_265_14
  %Hash_cpp_380_17 = rotr i64 %Hash_cpp_376_16, 32
  %Hash_cpp_380_18 = xor i64 %Hash_cpp_375_15, %Hash_cpp_380_17
  %Hash_cpp_380_19 = mul i64 %Hash_cpp_380_18, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_19, i64 40)
  store int32 %RelationMappedLogic_cpp_308_13, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_230_9)
  %MaterializationHelper_cpp_150_20 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_150_20
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_22 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_22 %cancellation %continueProbe

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
  return 24

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 720
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 27)
  return 26
}

define int32 @_9_join_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 720
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 27
}

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 624
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %25577, i64 1, global %25688, i32 5)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 28, i32 29, i32 30)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 31)
  return 32
}

define int32 @_9_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2450449
  %Date_cpp_57_6 = cmpule i32 2449719, %RelationMappedLogic_cpp_310_
  %TableScanTranslator_cpp_425_ = and bool %Date_cpp_57_6, %Date_cpp_57_
  condbr %TableScanTranslator_cpp_425_ %then %contScan

then:
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 720
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_7 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_8 = mul i64 %Hash_cpp_380_7, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_8)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %then %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_9 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_10 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_12 = load int32 %MaterializationHelper_cpp_229_11
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_303_14 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 524288
  %RelationMappedLogic_cpp_308_15 = load int32 %RelationMappedLogic_cpp_303_14, %localTid
  %RelationMappedLogic_cpp_303_16 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_16, %localTid
  %RelationMappedLogic_cpp_303_17 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_18 = load int64 %RelationMappedLogic_cpp_303_17, %localTid
  %Hash_cpp_265_19 = zext i64 %MaterializationHelper_cpp_230_12
  %Hash_cpp_265_20 = zext i64 %RelationMappedLogic_cpp_308_15
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_20, 32
  %Hash_cpp_269_21 = or i64 %Hash_cpp_265_19, %Hash_cpp_269_
  %Hash_cpp_375_22 = crc32 i64 5961697176435608501, %Hash_cpp_269_21
  %Hash_cpp_376_23 = crc32 i64 2231409791114444147, %Hash_cpp_269_21
  %Hash_cpp_380_24 = rotr i64 %Hash_cpp_376_23, 32
  %Hash_cpp_380_25 = xor i64 %Hash_cpp_375_22, %Hash_cpp_380_24
  %Hash_cpp_380_26 = mul i64 %Hash_cpp_380_25, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_26, i64 60)
  store int32 %MaterializationHelper_cpp_230_12, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int32 %RelationMappedLogic_cpp_308_15, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 8
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_10)
  %MaterializationHelper_cpp_150_27 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_27, %MaterializationHelper_cpp_230_9)
  %MaterializationHelper_cpp_150_28 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_150_28
  %MaterializationHelper_cpp_150_29 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 40
  store int64 %RelationMappedLogic_cpp_309_18, %MaterializationHelper_cpp_150_29
  %MaterializationHelper_cpp_150_30 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  store int32 %RelationMappedLogic_cpp_310_, %MaterializationHelper_cpp_150_30
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_32 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_32 %cancellation %continueProbe

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
  return 31

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 864
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 34)
  return 33
}

define int32 @_9_join_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 864
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 34
}

define int32 @_9_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 768
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %3199, i64 0, global %16347, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 35, i32 36, i32 37)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 38)
  return 39
}

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 52)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %31434, int64 %31448)

define int32 @_9_planStep25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %31604)

define int32 @_9_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_map_join_tablescan_supplier(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 80
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_308_6 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 864
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_265_7 = zext i64 %RelationMappedLogic_cpp_308_6
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_7, 32
  %Hash_cpp_269_8 = or i64 %Hash_cpp_265_, %Hash_cpp_269_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_269_8
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_269_8
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_9 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_10 = mul i64 %Hash_cpp_380_9, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_10)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_11 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 8
  %MaterializationHelper_cpp_230_12 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_13 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_14 = load data128 %MaterializationHelper_cpp_229_13
  %MaterializationHelper_cpp_229_15 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_16 = load int64 %MaterializationHelper_cpp_229_15
  %MaterializationHelper_cpp_229_17 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 40
  %MaterializationHelper_cpp_230_18 = load int64 %MaterializationHelper_cpp_229_17
  %MaterializationHelper_cpp_229_19 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_20 = load int32 %MaterializationHelper_cpp_229_19
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %Integer_cpp_83_22 = cmpeq i32 %RelationMappedLogic_cpp_308_6, %MaterializationHelper_cpp_230_11
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Integer_cpp_83_22
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %Date_cpp_193_ = call i32 _ZN5umbra11DateRuntime11extractYearEj (%MaterializationHelper_cpp_230_20)
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %MaterializationHelper_cpp_230_16 %cont23 %overflow

cont23:
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_230_18, 63
  %BigNumeric_cpp_863_24 = builddata128 d128 %MaterializationHelper_cpp_230_18 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_25 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_26 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_25
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_24, %BigNumeric_cpp_863_26)
  %Hash_cpp_265_27 = zext i64 %Date_cpp_193_
  %Hash_cpp_375_28 = crc32 i64 5961697176435608501, %Hash_cpp_265_27
  %Hash_cpp_376_29 = crc32 i64 2231409791114444147, %Hash_cpp_265_27
  %Hash_cpp_380_30 = rotr i64 %Hash_cpp_376_29, 32
  %Hash_cpp_380_31 = xor i64 %Hash_cpp_375_28, %Hash_cpp_380_30
  %Hash_cpp_380_32 = mul i64 %Hash_cpp_380_31, 2685821657736338717
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_14, %Hash_cpp_380_32)
  %Hash_cpp_383_33 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_12, %Hash_cpp_383_)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_383_33, 1023
  %PreaggregationLogic_cpp_20_34 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_34, i32 0, i32 0
  %PreaggregationLogic_cpp_25_35 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_383_33
  condbr %PreaggregationLogic_cpp_25_35 %then %else36

then:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_383_33)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_, %MaterializationHelper_cpp_230_14)
  %MaterializationHelper_cpp_991_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_991_, %MaterializationHelper_cpp_230_12)
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 32
  store int32 %Date_cpp_193_, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 36
  store data128 %Numeric_cpp_698_, %GroupByTranslator_cpp_207_
  br %cont67

else36:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_34, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_37 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_876_38 = load data128 %MaterializationHelper_cpp_876_37
  %MaterializationHelper_cpp_876_39 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 32
  %MaterializationHelper_cpp_876_40 = load int32 %MaterializationHelper_cpp_876_39
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_230_14
  %Char_cpp_113_41 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_41
  condbr %Char_cpp_114_ %then42 %cont48

then42:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_43 = extractdata128 i64 %MaterializationHelper_cpp_230_14
  %Char_cpp_115_44 = cmpeq i64 %Char_cpp_115_43, %Char_cpp_115_
  condbr %Char_cpp_115_44 %then45 %else46

then45:
  br %cont47

else46:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_14, %MaterializationHelper_cpp_876_)
  br %cont47

cont47:
  %36269 = phi bool [bool true, %then45 %Char_cpp_118_, %else46]
  br %cont48

cont48:
  %36305 = phi bool [%36269, %cont47 bool false, %else36]
  %ConsumerContext_cpp_417_49 = not bool %36305
  condbr %ConsumerContext_cpp_417_49 %then %else50

else50:
  %Char_cpp_113_51 = extractdata128 i64 %MaterializationHelper_cpp_230_12
  %Char_cpp_113_52 = extractdata128 i64 %MaterializationHelper_cpp_876_38
  %Char_cpp_114_53 = cmpeq i64 %Char_cpp_113_51, %Char_cpp_113_52
  condbr %Char_cpp_114_53 %then54 %cont62

then54:
  %Char_cpp_115_55 = extractdata128 i64 %MaterializationHelper_cpp_876_38
  %Char_cpp_115_56 = extractdata128 i64 %MaterializationHelper_cpp_230_12
  %Char_cpp_115_57 = cmpeq i64 %Char_cpp_115_56, %Char_cpp_115_55
  condbr %Char_cpp_115_57 %then58 %else59

then58:
  br %cont61

else59:
  %Char_cpp_118_60 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_12, %MaterializationHelper_cpp_876_38)
  br %cont61

cont61:
  %36648 = phi bool [bool true, %then58 %Char_cpp_118_60, %else59]
  br %cont62

cont62:
  %36684 = phi bool [%36648, %cont61 bool false, %else50]
  %Integer_cpp_83_63 = cmpeq i32 %Date_cpp_193_, %MaterializationHelper_cpp_876_40
  %ConsumerContext_cpp_407_64 = and bool %36684, %Integer_cpp_83_63
  %ConsumerContext_cpp_417_65 = not bool %ConsumerContext_cpp_407_64
  condbr %ConsumerContext_cpp_417_65 %then %else66

else66:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 36
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_217_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %Numeric_cpp_698_)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_217_
  br %cont67

cont67:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_68 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_68 %cancellation %continueProbe

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
  return 38

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare int32 @_ZN5umbra11DateRuntime11extractYearEj(int32 %34449)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %34734, data128 %34748)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %35373, int64 %35387)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %36936, data128 %36950)

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 912
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 41)
  return 40
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %37789, int8* %37803, int64 %37817)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %37908, int8* %37922)

define int32 @_9_groupby_map_join_tablescan_supplier_extra(int8* %trampoline, int8* %state, int8* %localState) [
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
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %GroupByTranslator_cpp_112_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 16
  %MaterializationHelper_cpp_876_3 = load data128 %MaterializationHelper_cpp_876_2
  %MaterializationHelper_cpp_876_4 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 32
  %MaterializationHelper_cpp_876_5 = load int32 %MaterializationHelper_cpp_876_4
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_6 = load data128 %GroupByTranslator_cpp_113_
  %MaterializationHelper_cpp_876_7 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 16
  %MaterializationHelper_cpp_876_8 = load data128 %MaterializationHelper_cpp_876_7
  %MaterializationHelper_cpp_876_9 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 32
  %MaterializationHelper_cpp_876_10 = load int32 %MaterializationHelper_cpp_876_9
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_113_11 = extractdata128 i64 %MaterializationHelper_cpp_876_6
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_11
  condbr %Char_cpp_114_ %then12 %cont16

then12:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_6
  %Char_cpp_115_13 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_14 = cmpeq i64 %Char_cpp_115_13, %Char_cpp_115_
  condbr %Char_cpp_115_14 %then15 %else

then15:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_6)
  br %cont

cont:
  %39863 = phi bool [bool true, %then15 %Char_cpp_118_, %else]
  br %cont16

cont16:
  %39899 = phi bool [%39863, %cont bool false, %then]
  %ConsumerContext_cpp_417_ = not bool %39899
  condbr %ConsumerContext_cpp_417_ %noMatch %else17

else17:
  %Char_cpp_113_18 = extractdata128 i64 %MaterializationHelper_cpp_876_3
  %Char_cpp_113_19 = extractdata128 i64 %MaterializationHelper_cpp_876_8
  %Char_cpp_114_20 = cmpeq i64 %Char_cpp_113_18, %Char_cpp_113_19
  condbr %Char_cpp_114_20 %then21 %cont29

then21:
  %Char_cpp_115_22 = extractdata128 i64 %MaterializationHelper_cpp_876_8
  %Char_cpp_115_23 = extractdata128 i64 %MaterializationHelper_cpp_876_3
  %Char_cpp_115_24 = cmpeq i64 %Char_cpp_115_23, %Char_cpp_115_22
  condbr %Char_cpp_115_24 %then25 %else26

then25:
  br %cont28

else26:
  %Char_cpp_118_27 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_8)
  br %cont28

cont28:
  %40240 = phi bool [bool true, %then25 %Char_cpp_118_27, %else26]
  br %cont29

cont29:
  %40276 = phi bool [%40240, %cont28 bool false, %else17]
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_5, %MaterializationHelper_cpp_876_10
  %ConsumerContext_cpp_407_ = and bool %40276, %Integer_cpp_83_
  %ConsumerContext_cpp_417_30 = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_30 %noMatch %else31

else31:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 52
  %GroupByTranslator_cpp_121_32 = getelementptr int8 %chainEntry, i64 52
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_121_32
  %MaterializationHelper_cpp_977_33 = load data128 %GroupByTranslator_cpp_121_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_33)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_121_32
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_34 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_34, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 68
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
  return 41
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %38258)

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 912
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 42, i32 43, i32 44)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 45)
  return 46
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %41490, int8* %41504)

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %2842)
  return 0
}

define int32 @_9_planStep30(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %41870)

define int32 @_9_planStep31(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
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
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_876_2 = load data128 %MaterializationHelper_cpp_876_1
  %MaterializationHelper_cpp_876_3 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 32
  %MaterializationHelper_cpp_876_4 = load int32 %MaterializationHelper_cpp_876_3
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 36
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_248_
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 52)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_876_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_876_2)
  %MaterializationHelper_cpp_150_5 = getelementptr int8 %SortTranslator_cpp_310_, i64 32
  store int32 %MaterializationHelper_cpp_876_4, %MaterializationHelper_cpp_150_5
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 36
  store data128 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_161_
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
  return 45
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %42898, int64 %42912)

define int32 @_9_planStep32(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 48)
  return 47
}

define int32 @_9_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25504
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 48
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %43808)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %43890, object umbra::SortOperator* %43904)

define int32 @_9_planStep33(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25504
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %44048)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 25504
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 50)
  return 49
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %44132, int8* %44146, int8* %44160)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %44301, object umbra::SortOperator* %44315)

define int32 @_9_sort_groupby_extra34(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25504
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %44048, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 50
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %44565, int8* %44579, int8* %44593, int32 %44607)

define int32 @_9_planStep35(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25504
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 51, i32 52, i32 53)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 54)
  return 55
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %44859, object umbra::SortOperator* %44873, bool %44887)

define int32 @_9_planStep36(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep37(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep38(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %CodeGen_hpp_1103_, i64 32
  %MaterializationHelper_cpp_230_3 = load int32 %MaterializationHelper_cpp_229_2
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 36
  %MaterializationHelper_cpp_230_4 = load data128 %MaterializationHelper_cpp_233_
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x56043b07d7c0, i64 720575940798709760, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %46355, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x56043b07d7c0, i64 720575940798709760, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %46355, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x56043b07d7c0, i64 288230376151711744, %MaterializationHelper_cpp_230_3)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %46355, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x56043b07d7c0, i64 504403158684926976, %MaterializationHelper_cpp_230_4)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 54
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %46146, int8 %46160)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %46287, int64 %46301, data128 %46315)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %46377, int32 %46391)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %46489, int64 %46503, int32 %46517)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %46593, int64 %46607, data128 %46621)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %46697)

define int32 @_9_planStep39(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 312
  call void _ZN5umbra12TempOperator7destroyEPS0_ (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 336
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 432
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 480
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 576
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 624
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 720
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_7)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 768
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 864
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_9)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 912
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_10)
  %CompilationContext_cpp_214_11 = getelementptr int8 %state, i64 25504
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_11)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %47119)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %47409)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %47907)
`;
